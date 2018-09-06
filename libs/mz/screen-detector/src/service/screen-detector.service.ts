import {Inject, Injectable} from '@angular/core';
import {
  IConfig,
  ScreenDetectorAnswer
} from '../@absract/@interface/IConfig.interface';
import { fromEvent, merge, Observable, Subscription, timer } from 'rxjs';
import {
  debounceTime,
  map,
} from 'rxjs/operators';
import { ScreenTypeEnum } from '../@absract/@enums/screenType.enum';

@Injectable()
export class ScreenDetectorService {

  public lastScreenType = '';
  private readonly shortPrefix: string = 'c-sd-';


  // it is flow
  public subscription$: Observable<ScreenDetectorAnswer>;

  constructor(
    @Inject('ScreenDetectorConfig') private ScreenDetectorConfig
  ) {
    // init config if inwoked from module
    this.subscription$ = merge(fromEvent(window, 'resize'), timer(0)).pipe(
      debounceTime(this.ScreenDetectorConfig.debounceTime),
      map( this.getResult.bind(this) )
    );
  }



  // getClientLang screen type
  public getScreenType(): string {
    const oConfig: IConfig  = this.ScreenDetectorConfig.config,
      iDeviceWidth      = document &&document.documentElement.clientWidth;

    let  r;

    if (iDeviceWidth < oConfig.medium) {
      r = ScreenTypeEnum.small;
    } else if (oConfig.medium <= iDeviceWidth && iDeviceWidth < oConfig.large) {
      r = ScreenTypeEnum.medium;
    } else if (oConfig.large <= iDeviceWidth) {
      r = ScreenTypeEnum.large;
    }
    return r;
  }

  // getClientLang result for passed to flow
  private getResult(): ScreenDetectorAnswer {
    const screenType = this.getScreenType();//@L - this.getScreenType();

    const result: ScreenDetectorAnswer = {
      type: screenType,
      width: document && document.documentElement.clientWidth,
      height: document && document.documentElement.clientHeight
    };

    // добавить/удалить классы если были переданы при инициализации
    if ( this.isFirstInvokeWithThisScreenType(screenType) ) { //@L - this.isFirstInvokeWithThisScreenType(screenType)
      this.processingBaseClasses(result.type);
    }

    return result;
  }

  public  isFirstInvokeWithThisScreenType(screenType: string) {
    // is first invoke -> return true;
    if (screenType !== this.lastScreenType) {
      // save new screen for later recognize
      this.lastScreenType = screenType;

      return true;
    }

    // is first invoke -> return true || is not first invoke -> return false
    return false;
  }


  public getClassName(className: string): string {
    return this.shortPrefix + className;
  }

  public getSelectors(): String[] {
      return this.ScreenDetectorConfig['selectors'];
  }

  public getConfig () {
    return this.ScreenDetectorConfig['config'];

  }



  // добавление базовых классов если их передавали при инициализации модуля
  public  processingBaseClasses (screenType: string) {
    // getClientLang new class name by screen type
    const newClassName = this.getClassName(screenType);

    // getClientLang elements
    const classSelect = document && document.querySelectorAll(
      this.ScreenDetectorConfig['selectors'].join(',')
    );

    // guard if isset elements
    if (classSelect.length > 1 || !classSelect[0]) return;

    // we have elements and this is first invoke with new screen type -> remove classes && add new class
    for (let i = 0; i < classSelect.length; i++) {
      // remove classes
      for (const screenTypeEnumKey in ScreenTypeEnum) {
        const classForRemove = this.getClassName(
          ScreenTypeEnum[screenTypeEnumKey]
        );

        // if this is not same same class -> remove
        if (newClassName !== classForRemove) {
          classSelect[i].classList.remove(classForRemove);
        }
      }

      // add new class
      classSelect[i].classList.add(newClassName);
    }
  }
}
