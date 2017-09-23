import { TestBed, inject } from '@angular/core/testing';

import { PostsEffectsService } from './posts-effects.service';

describe('PostsEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsEffectsService]
    });
  });

  it('should ...', inject([PostsEffectsService], (service: PostsEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
