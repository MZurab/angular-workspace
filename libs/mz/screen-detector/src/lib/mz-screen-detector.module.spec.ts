import { async, TestBed } from '@angular/core/testing';
import { MzScreenDetectorModule } from './mz-screen-detector.module';

describe('MzScreenDetectorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MzScreenDetectorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MzScreenDetectorModule).toBeDefined();
  });
});
