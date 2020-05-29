import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerEditUserComponent } from './employer-edit-user.component';

describe('EmployerEditUserComponent', () => {
  let component: EmployerEditUserComponent;
  let fixture: ComponentFixture<EmployerEditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerEditUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
