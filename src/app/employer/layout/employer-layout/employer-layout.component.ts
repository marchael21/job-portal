import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { AuthenticationService } from '../../../_services';
import { User, Role } from '../../../_models';

@Component({
  selector: 'app-employer-layout',
  templateUrl: './employer-layout.component.html',
  styleUrls: ['./employer-layout.component.css']
})
export class EmployerLayoutComponent implements OnInit {
	user: User;

	constructor(
	    private router: Router,
	    private authenticationService: AuthenticationService
	) {
	    this.authenticationService.user.subscribe(x => this.user = x);
	}

	ngOnInit(): void {
	}

	get isEmployer() {
	  return this.user && this.user.role === Role.Employer;
	}

	logout() {
		this.authenticationService.logout();
		this.router.navigate(['/employer/login']);
	}

}
