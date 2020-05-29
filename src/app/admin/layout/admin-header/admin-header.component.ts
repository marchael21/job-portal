import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { AuthenticationService } from '../../../_services';
import { User, Role } from '../../../_models';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
	@Input() sideNav: MatSidenav;
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
