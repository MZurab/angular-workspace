import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ScreenDetectorService } from '../service/screen-detector.service';
import { Subscription } from 'rxjs';

/* @example №1 - <div *ifScreenMoreThen='700'></div> */
/* @example №2 - <div *ifScreenMoreThen='700,300'></div> */

@Directive({ selector: '[ifScreenMoreThen]' })
export class IfScreenMoreThenDirective {
  @Input('ifScreenMoreThen') public ifScreenMoreThen: string;

  private subscription: Subscription;
  private nInvokedCounter: number = 0;

  private w: number = 0;
  private h: number = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private screenDetector: ScreenDetectorService
  ) {}

  ngOnInit() {
    this.safeSetParams(this.ifScreenMoreThen);

    this.subscription = this.screenDetector.subscription$.subscribe(screen => {
      this.check(screen.width, screen.height);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  check(w: number, h: number) {
    this.performCondition((!this.w || this.w < w) && (!this.h || this.h < h));
  }

  // Установка параметров
  safeSetParams(data: string) {
    let params = data.split(',');

    if (params[0]) {
      let w = parseInt(params[0], 10);
      if (!isNaN(w)) this.w = w;
    }

    if (params[1]) {
      let h = parseInt(params[1], 10);
      if (!isNaN(h)) this.h = h;
    }
  }

  performCondition(condition) {
    if (condition) {
      if (this.nInvokedCounter > 0) this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.nInvokedCounter++;
    } else {
      this.viewContainer.clear();
    }
  }
}
