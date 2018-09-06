import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IConfig} from "../@absract/@interface/IConfig.interface";
import {ScreenDetectorDirective} from "../directive/screenDetector.directive";
import {IfScreenIsMediumDirective} from "../directive/ifScreenIsMedium.directive";
import {IfScreenIsLargeDirective} from "../directive/ifScreenIsLarge.directive";
import {IfScreenIsSmallDirective} from "../directive/ifScreenIsSmall.directive";
import {IfScreenLessThenDirective} from "../directive/ifScreenLessThen.directive";
import {IfScreenMoreThenDirective} from "../directive/ifScreenMoreThen.directive";
import {IfScreenTypeDirective} from "../directive/ifScreenType.directive";
import {ScreenDetectorService} from "../service/screen-detector.service";

@NgModule({
  imports: [CommonModule],
  declarations: [
    IfScreenTypeDirective,
    IfScreenMoreThenDirective,
    IfScreenLessThenDirective,
    IfScreenIsSmallDirective,
    IfScreenIsLargeDirective,
    IfScreenIsMediumDirective,
    ScreenDetectorDirective
  ],
  exports: [
    IfScreenTypeDirective,
    IfScreenMoreThenDirective,
    IfScreenLessThenDirective,
    IfScreenIsSmallDirective,
    IfScreenIsLargeDirective,
    IfScreenIsMediumDirective,
    ScreenDetectorDirective
  ]
})
export class MzScreenDetectorModule {
  public static forRoot(
    config: IConfig,
    debounceTime: number = 100,
    selectors: string[]
  ): ModuleWithProviders {
    return {
      ngModule: MzScreenDetectorModule,
      providers: [
        ScreenDetectorService,
        {
          provide: 'ScreenDetectorConfig',
          useValue: {'config': config, 'debounceTime' : debounceTime, 'selectors' : selectors}
        }
      ]
    };
  }
}
