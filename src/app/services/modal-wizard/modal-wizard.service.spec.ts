import { TestBed } from '@angular/core/testing';

import { ModalWizardService } from './modal-wizard.service';

describe('ModalWizardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalWizardService = TestBed.get(ModalWizardService);
    expect(service).toBeTruthy();
  });
});
