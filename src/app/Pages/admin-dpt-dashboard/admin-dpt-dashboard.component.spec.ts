import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDptDashboardComponent } from './admin-dpt-dashboard.component';

describe('AdminDptDashboardComponent', () => {
  let component: AdminDptDashboardComponent;
  let fixture: ComponentFixture<AdminDptDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDptDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDptDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
