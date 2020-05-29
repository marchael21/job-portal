import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { AuthenticationService } from '../../../_services';

@Component({
  selector: 'app-employer-register',
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.css']
})
export class EmployerRegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false; 
    submitted = false;
    returnUrl: string;
    errors = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.userValue) { 
            this.router.navigate(['/employer/job-posting/list']);
        }
    }

    ngOnInit() {

        this.registerForm = this.formBuilder.group({
            name: [''],
            email: [''],
            company_name: [''],
            password: [''],
            password_confirmation: [''],
        });

    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {

        this.submitted = true;

        this.loading = true;
        this.authenticationService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    Swal.fire({
                        text: 'You have successfully registered!',
                        icon: 'success',
                        confirmButtonColor: "#3f51b5"
                    });
                    this.router.navigate(['/employer/login']);
                },
                error => {
                    this.errors = error;

                    //server side error
                    Object.keys(this.errors).forEach(prop => {
                        const formControl = this.registerForm.get(prop);
                        if (formControl) {
                            formControl.setErrors({
                                message: this.errors[prop]
                            });
                        }

                        // TODO: consider adding the error to some data structure
                        // and visualize it as an alert/notification to the user
                        // in addition to activating the errors on the form.

                        // errorMessages.push({
                        //   propName: prop,
                        //   errors: validationErrors[prop]
                        // });
                    });

                    this.loading = false;
                });
    }

}
