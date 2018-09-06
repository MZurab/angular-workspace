import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ScreenDetectorService } from '../service/screen-detector.service';
import { Subscription } from 'rxjs';

@Directive({ selector: '[ifScreenType]' }) //
export class IfScreenTypeDirective {
  //implements OnChanges

  @Input() public ifScreenType: string;

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
    this.performCondition(this.ifScreenType === screenType);
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
