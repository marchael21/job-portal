import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerListUserComponent } from './employer-list-user.component';

describe('EmployerListUserComponent', () => {
  let component: EmployerListUserComponent;
  let fixture: ComponentFixture<EmployerListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerListUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
