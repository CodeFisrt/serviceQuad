import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDptLayoutComponent } from './admin-dpt-layout.component';

describe('AdminDptLayoutComponent', () => {
  let component: AdminDptLayoutComponent;
  let fixture: ComponentFixture<AdminDptLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDptLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDptLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
