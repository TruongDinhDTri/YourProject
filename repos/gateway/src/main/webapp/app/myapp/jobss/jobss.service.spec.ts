import { TestBed } from '@angular/core/testing';

import { JobssService } from './jobss.service';

describe('JobssService', () => {
  let service: JobssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
