import { TestBed } from '@angular/core/testing';

import { SkiServiceService } from './ski-service.service';

describe('SkiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkiServiceService = TestBed.get(SkiServiceService);
    expect(service).toBeTruthy();
  });
});
