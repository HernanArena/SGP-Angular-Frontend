import { TestBed } from '@angular/core/testing';

import { SearchcodeService } from './searchcode.service';

describe('SearchcodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchcodeService = TestBed.get(SearchcodeService);
    expect(service).toBeTruthy();
  });
});
