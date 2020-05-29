import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestContentComponent } from './guest-content.component';

describe('GuestContentComponent', () => {
  let component: GuestContentComponent;
  let fixture: ComponentFixture<GuestContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
