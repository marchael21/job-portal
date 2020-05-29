import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestViewJobsComponent } from './guest-view-jobs.component';

describe('GuestViewJobsComponent', () => {
  let component: GuestViewJobsComponent;
  let fixture: ComponentFixture<GuestViewJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestViewJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestViewJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
