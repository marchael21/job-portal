import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { AuthenticationService } from '../../../_services';
import { User, Role } from '../../../_models';

@Component({
  selector: 'app-employer-header',
  templateUrl: './employer-header.component.html',
  styleUrls: ['./employer-header.component.css']
})
export class EmployerHeaderComponent implements OnInit {
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

	get isEmployer() {
	  return this.user && this.user.role === Role.Employer;
	}

	logout() {
		this.authenticationService.logout();
		this.router.navigate(['/employer/login']);
	}

}
