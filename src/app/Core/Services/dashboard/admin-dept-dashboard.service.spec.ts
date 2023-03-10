import { TestBed } from '@angular/core/testing';

import { AdminDeptDashboardService } from './admin-dept-dashboard.service';

describe('AdminDeptDashboardService', () => {
  let service: AdminDeptDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDeptDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
