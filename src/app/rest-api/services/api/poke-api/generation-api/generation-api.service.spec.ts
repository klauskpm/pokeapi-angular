import { TestBed, inject } from '@angular/core/testing';

import { GenerationApiService } from './generation-api.service';

describe('GenerationApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerationApiService]
    });
  });

  it('should ...', inject([GenerationApiService], (service: GenerationApiService) => {
    expect(service).toBeTruthy();
  }));
});
