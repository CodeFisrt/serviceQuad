import { TestBed } from '@angular/core/testing';

import { EmoplyLeavePageService } from './emoply-leave-page.service';

describe('EmoplyLeavePageService', () => {
  let service: EmoplyLeavePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmoplyLeavePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
