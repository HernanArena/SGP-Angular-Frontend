import { TestBed } from '@angular/core/testing';

import { TicketFormService } from './ticket-form.service';

describe('TicketFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketFormService = TestBed.get(TicketFormService);
    expect(service).toBeTruthy();
  });
});
