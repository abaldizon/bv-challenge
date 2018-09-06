import { TestBed, inject } from '@angular/core/testing';

import { EmailReportService } from './email-report.service';

describe('EmailReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailReportService]
    });
  });

  it('should be created', inject([EmailReportService], (service: EmailReportService) => {
    expect(service).toBeTruthy();
  }));
});
