/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapWeatherServiceService } from './mapWeatherService.service';

describe('Service: MapWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapWeatherServiceService]
    });
  });

  it('should ...', inject([MapWeatherServiceService], (service: MapWeatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
