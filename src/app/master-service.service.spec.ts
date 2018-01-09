import { TestBed, inject } from '@angular/core/testing';

import { MasterServiceService } from './master-service.service';

describe('MasterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterServiceService]
    });
  });

  it('should be created', inject([MasterServiceService], (service: MasterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
