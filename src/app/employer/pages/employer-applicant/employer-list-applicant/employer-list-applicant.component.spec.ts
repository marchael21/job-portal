import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerListApplicantComponent } from './employer-list-applicant.component';

describe('EmployerListApplicantComponent', () => {
  let component: EmployerListApplicantComponent;
  let fixture: ComponentFixture<EmployerListApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerListApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerListApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
