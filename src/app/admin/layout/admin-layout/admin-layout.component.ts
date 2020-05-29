import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { AuthenticationService } from '../../../_services';
import { User, Role } from '../../../_models';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
	user: User;

	constructor(
	    private router: Router,
	    private authenticationService: AuthenticationService
	) {
	    this.authenticationService.user.subscribe(x => this.user = x);
	}

	ngOnInit(): void {
	}

	get isAdmin() {
	  return this.user && this.user.role === Role.Administrator;
	}

	logout() {
		this.authenticationService.logout();
		this.router.navigate(['/admin/login']);
	}
}
