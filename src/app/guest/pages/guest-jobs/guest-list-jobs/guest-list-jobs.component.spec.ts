import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListJobsComponent } from './guest-list-jobs.component';

describe('GuestListJobsComponent', () => {
  let component: GuestListJobsComponent;
  let fixture: ComponentFixture<GuestListJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestListJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestListJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
