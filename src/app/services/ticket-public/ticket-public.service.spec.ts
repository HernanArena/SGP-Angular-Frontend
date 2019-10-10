import { TestBed } from '@angular/core/testing';

import { TicketPublicService } from './ticket-public.service';

describe('TicketPublicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketPublicService = TestBed.get(TicketPublicService);
    expect(service).toBeTruthy();
  });
});
