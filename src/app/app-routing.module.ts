import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { GuestLayoutComponent } from './guest/layout/guest-layout/guest-layout.component';
import { GuestHomeComponent } from './guest/pages/guest-home/guest-home.component';
import { GuestListJobsComponent } from './guest/pages/guest-jobs/guest-list-jobs/guest-list-jobs.component';
import { GuestViewJobsComponent } from './guest/pages/guest-jobs/guest-view-jobs/guest-view-jobs.component';

// Employer Components
// Employer Layout Component
import { EmployerLayoutComponent } from './employer/layout/employer-layout/employer-layout.component';

// Employer Auth Components
import { EmployerLoginComponent } from './employer/pages/employer-login/employer-login.component';
import { EmployerRegisterComponent } from './employer/pages/employer-register/employer-register.component';
import { EmployerProfileComponent } from './employer/pages/employer-profile/employer-profile.component';

// Employer Home Component
import { EmployerHomeComponent } from './employer/pages/employer-home/employer-home.component';

// Employer Job Listing Components
import { EmployerListJobPostingComponent } from './employer/pages/employer-job-posting/employer-list-job-posting/employer-list-job-posting.component';
import { EmployerAddJobPostingComponent } from './employer/pages/employer-job-posting/employer-add-job-posting/employer-add-job-posting.component';
import { EmployerEditJobPostingComponent } from './employer/pages/employer-job-posting/employer-edit-job-posting/employer-edit-job-posting.component';

// Employer Applicant Components
import { EmployerListApplicantComponent } from './employer/pages/employer-applicant/employer-list-applicant/employer-list-applicant.component';

// Employer User Components
import { EmployerListUserComponent } from './employer/pages/employer-user/employer-list-user/employer-list-user.component';
import { EmployerAddUserComponent } from './employer/pages/employer-user/employer-add-user/employer-add-user.component';
import { EmployerEditUserComponent } from './employer/pages/employer-user/employer-edit-user/employer-edit-user.component';

// Admin Components
// Admin Layout
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';

// Admin Auth Component
import { AdminLoginComponent } from './admin/pages/admin-login/admin-login.component';
import { AdminProfileComponent } from './admin/pages/admin-profile/admin-profile.component';

// Admi User Components
import { AdminListUserComponent } from './admin/pages/admin-user/admin-list-user/admin-list-user.component';
import { AdminAddUserComponent } from './admin/pages/admin-user/admin-add-user/admin-add-user.component';
import { AdminEditUserComponent } from './admin/pages/admin-user/admin-edit-user/admin-edit-user.component';

import { AuthGuard } from './_helpers';
import { Role } from './_models';

const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', component: GuestHomeComponent, pathMatch: 'full'},
      { path: 'jobs', component: GuestListJobsComponent },
    ]
  },
  {
    path: 'employer',
    component: EmployerLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      // { path: '', component: EmployerHomeComponent, pathMatch: 'full'},
      { path: '',   redirectTo: '/employer/login', pathMatch: 'full' }, // redirect to employer login
      { path: 'login', component: EmployerLoginComponent },
      { path: 'register', component: EmployerRegisterComponent },
      { path: 'job-posting', redirectTo: '/employer/job-posting/list', pathMatch: 'full' }, // redirect to job posting list
      { 
        path: 'job-posting', 
        canActivate: [AuthGuard],
        data: { roles: [Role.Employer] },
        children: [
          { path: 'list', component: EmployerListJobPostingComponent },
          { path: 'create', component: EmployerAddJobPostingComponent },
        ] 
      },
      { 
        path: 'applicant', 
        canActivate: [AuthGuard],
        data: { roles: [Role.Employer] },
        children: [
          { path: 'list', component: EmployerListApplicantComponent },
        ] 
      },
      { 
        path: 'profile', 
        component: EmployerProfileComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Employer] },
      },
      { 
        path: 'user', 
        canActivate: [AuthGuard],
        data: { roles: [Role.Employer] },
        children: [
          { path: 'list', component: EmployerListUserComponent },
          { path: 'create', component: EmployerAddUserComponent },
        ] 
      },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      // { path: '', component: AdminHomeComponent, pathMatch: 'full'},
      { path: '',   redirectTo: '/admin/login', pathMatch: 'full' }, // redirect to admin login
      { path: 'login', component: AdminLoginComponent },
      { 
        path: 'profile', 
        component: AdminProfileComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Administrator] },
      },
      { 
        path: 'user', 
        canActivate: [AuthGuard],
        data: { roles: [Role.Administrator] },
        children: [
          { path: 'list', component: AdminListUserComponent },
          { path: 'create', component: AdminAddUserComponent },
        ] 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
