import {Directive, Renderer2, ElementRef, OnDestroy, OnInit} from '@angular/core';
import { ScreenDetectorService } from '../service/screen-detector.service';
import { Subscription } from 'rxjs';
import { ScreenTypeEnum } from '../@absract/@enums/screenType.enum';

@Directive({ selector: '[mz-screen-detector]' }) //
export class ScreenDetectorDirective implements OnInit, OnDestroy{
  private subscription: Subscription;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private screenDetector: ScreenDetectorService,
  ) {
    this.subscription = screenDetector.subscription$.subscribe(screen => {
      // delete classes
      for (const screenTypeEnumKey in ScreenTypeEnum) {
        renderer.removeClass(
          hostElement.nativeElement,
          screenDetector.getClassName(ScreenTypeEnum[screenTypeEnumKey])
        );
      }

      // add new class
      renderer.addClass(
        hostElement.nativeElement,
        screenDetector.getClassName(screen.type)
      );
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
