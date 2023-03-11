import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTicketsComponent } from './department-tickets.component';

describe('DepartmentTicketsComponent', () => {
  let component: DepartmentTicketsComponent;
  let fixture: ComponentFixture<DepartmentTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
