import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerListJobPostingComponent } from './employer-list-job-posting.component';

describe('EmployerListJobPostingComponent', () => {
  let component: EmployerListJobPostingComponent;
  let fixture: ComponentFixture<EmployerListJobPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerListJobPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerListJobPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
