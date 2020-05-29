import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerEditJobPostingComponent } from './employer-edit-job-posting.component';

describe('EmployerEditJobPostingComponent', () => {
  let component: EmployerEditJobPostingComponent;
  let fixture: ComponentFixture<EmployerEditJobPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerEditJobPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerEditJobPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
