import { TestBed, inject } from '@angular/core/testing';

import { SatelliteDataService } from './satellite-data.service';

describe('SatelliteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SatelliteDataService]
    });
  });

  it('should be created', inject([SatelliteDataService], (service: SatelliteDataService) => {
    expect(service).toBeTruthy();
  }));
});
