import { TestBed } from '@angular/core/testing';

import { UserSavedLocationsService } from './user-saved-locations.service';

describe('UserSavedLocationsService', () => {
  let service: UserSavedLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSavedLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
