import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerAddJobPostingComponent } from './employer-add-job-posting.component';

describe('EmployerAddJobPostingComponent', () => {
  let component: EmployerAddJobPostingComponent;
  let fixture: ComponentFixture<EmployerAddJobPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerAddJobPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerAddJobPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
