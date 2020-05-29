import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';

import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

// Guest/Applicant Components
import { GuestHeaderComponent } from './guest/layout/guest-header/guest-header.component';
import { GuestFooterComponent } from './guest/layout/guest-footer/guest-footer.component';
import { GuestContentComponent } from './guest/layout/guest-content/guest-content.component';
import { GuestLayoutComponent } from './guest/layout/guest-layout/guest-layout.component';

import { GuestHomeComponent } from './guest/pages/guest-home/guest-home.component';
import { GuestListJobsComponent } from './guest/pages/guest-jobs/guest-list-jobs/guest-list-jobs.component';
import { GuestViewJobsComponent } from './guest/pages/guest-jobs/guest-view-jobs/guest-view-jobs.component';

// Employer Components
import { EmployerHeaderComponent } from './employer/layout/employer-header/employer-header.component';
import { EmployerFooterComponent } from './employer/layout/employer-footer/employer-footer.component';
import { EmployerContentComponent } from './employer/layout/employer-content/employer-content.component';
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
import { EmployerListUserComponent } from './employer/pages/employer-user/employer-list-user/employer-list-user.component';
import { EmployerAddUserComponent } from './employer/pages/employer-user/employer-add-user/employer-add-user.component';
import { EmployerEditUserComponent } from './employer/pages/employer-user/employer-edit-user/employer-edit-user.component';

import { AdminHeaderComponent } from './admin/layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/layout/admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin/layout/admin-content/admin-content.component';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './admin/pages/admin-login/admin-login.component';
import { AdminProfileComponent } from './admin/pages/admin-profile/admin-profile.component';
import { AdminHomeComponent } from './admin/pages/admin-home/admin-home.component';
import { AdminListUserComponent } from './admin/pages/admin-user/admin-list-user/admin-list-user.component';
import { AdminAddUserComponent } from './admin/pages/admin-user/admin-add-user/admin-add-user.component';
import { AdminEditUserComponent } from './admin/pages/admin-user/admin-edit-user/admin-edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestHeaderComponent,
    GuestFooterComponent,
    GuestContentComponent,
    GuestLayoutComponent,
    GuestHomeComponent,
    GuestListJobsComponent,
    GuestViewJobsComponent,
    EmployerHeaderComponent,
    EmployerFooterComponent,
    EmployerContentComponent,
    EmployerLayoutComponent,
    EmployerHomeComponent,
    EmployerLoginComponent,
    EmployerRegisterComponent,
    EmployerProfileComponent,
    EmployerListJobPostingComponent,
    EmployerAddJobPostingComponent,
    EmployerEditJobPostingComponent,
    EmployerListApplicantComponent,
    EmployerListUserComponent,
    EmployerAddUserComponent,
    EmployerEditUserComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminContentComponent,
    AdminLayoutComponent,
    AdminLoginComponent,
    AdminProfileComponent,
    AdminHomeComponent,
    AdminListUserComponent,
    AdminAddUserComponent,
    AdminEditUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    MatGridListModule,
    FlexLayoutModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
