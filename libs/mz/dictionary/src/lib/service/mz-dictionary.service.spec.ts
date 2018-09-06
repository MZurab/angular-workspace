import { TestBed, inject } from '@angular/core/testing';

import { MzDictionaryService } from './mz-dictionary.service';

describe('MzDictionaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MzDictionaryService]
    });
  });

  it('should be created', inject([MzDictionaryService], (service: MzDictionaryService) => {
    expect(service).toBeTruthy();
  }));
});
