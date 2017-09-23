import { TestBed, inject } from '@angular/core/testing';

import { UsersEffectsService } from './users-effects.service';

describe('UsersEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersEffectsService]
    });
  });

  it('should ...', inject([UsersEffectsService], (service: UsersEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
