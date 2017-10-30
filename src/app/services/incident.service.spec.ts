import { TestBed, inject } from '@angular/core/testing';

import { IncidentService } from './incident.service';

describe('IncidentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncidentService]
    });
  });

  it('should be created', inject([IncidentService], (service: IncidentService) => {
    expect(service).toBeTruthy();
  }));
});
