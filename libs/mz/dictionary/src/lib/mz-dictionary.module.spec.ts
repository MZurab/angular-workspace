import { async, TestBed } from '@angular/core/testing';
import { MzDictionaryModule } from './mz-dictionary.module';

describe('MzDictionaryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MzDictionaryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MzDictionaryModule).toBeDefined();
  });
});
