import { TestBed } from '@angular/core/testing';

import { NewManualService } from './new-manual.service';

describe('NewManualService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewManualService = TestBed.get(NewManualService);
    expect(service).toBeTruthy();
  });
});
