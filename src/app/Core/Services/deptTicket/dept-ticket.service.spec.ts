import { TestBed } from '@angular/core/testing';

import { DeptTicketService } from './dept-ticket.service';

describe('DeptTicketService', () => {
  let service: DeptTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
