import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerContentComponent } from './employer-content.component';

describe('EmployerContentComponent', () => {
  let component: EmployerContentComponent;
  let fixture: ComponentFixture<EmployerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
