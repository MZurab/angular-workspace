import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ScreenDetectorService } from '../service/screen-detector.service';
import { Subscription } from 'rxjs';
import { ScreenTypeEnum } from '../@absract/@enums/screenType.enum';

@Directive({ selector: '[ifScreenIsSmall]' }) //
export class IfScreenIsSmallDirective {
  //implements OnChanges
  private nInvokedCounter: number = 0;
  private subscription: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private screenDetector: ScreenDetectorService
  ) {
    this.subscription = screenDetector.subscription$.subscribe(screen => {
      this.check(screen.type);
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  check(screenType: string) {
    this.performCondition(screenType === ScreenTypeEnum.small);
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
