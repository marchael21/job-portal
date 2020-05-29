import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerAddUserComponent } from './employer-add-user.component';

describe('EmployerAddUserComponent', () => {
  let component: EmployerAddUserComponent;
  let fixture: ComponentFixture<EmployerAddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerAddUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
