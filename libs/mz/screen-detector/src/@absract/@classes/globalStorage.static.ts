// // import { IConfig } from '../@interface/IConfig.interface';
// // import { ScreenTypeEnum } from '../@enums/screenType.enum';
// // // @dynamic
// export class GlobalStorageStatic {
//   // public static config: IConfig;
//   // public static debounceTime: number;
//   // public static selectors: string[];
//
//   public static lastScreenType: string;
//
//   private static readonly shortPrefix: string = 'c-sd-';
//
//   static initConfig(
//     oConfig: IConfig,
//     devounceTime: number = 100,
//     selectors?: string[]
//   ): void {
//     // GlobalStorageStatic.debounceTime = devounceTime;
//     // GlobalStorageStatic.config = oConfig;
//     // GlobalStorageStatic.selectors =
//     //   Array.isArray(selectors) && selectors.length > 0 ? selectors : [];
//   }
//
//   // public static getSelectors(): String[] {
//   //   return this.selectors;
//   // }
//
//   public static getClassName(className: string): string {
//     return this.shortPrefix + className;
//   }
//
//   //
//   public static isFirstInvokeWithThisScreenType(screenType: string) {
//     // is first invoke -> return true;
//     if (screenType !== this.lastScreenType) {
//       // save new screen for later recognize
//       this.lastScreenType = screenType;
//
//       return true;
//     }
//
//     // is first invoke -> return true || is not first invoke -> return false
//     return false;
//   }
//
//   // добавление базовых классов если их передавали при инициализации модуля
//   public static processingBaseClasses(screenType: string) {
//     // getClientLang new class name by screen type
//     const newClassName = GlobalStorageStatic.getClassName(screenType);
//
//     // getClientLang elements
//     let classSelect = document.querySelectorAll(
//       GlobalStorageStatic.getSelectors().join(',')
//     );
//
//     // guard if isset elements
//     if (classSelect.length > 1 || !classSelect[0]) return;
//
//     // we have elements and this is first invoke with new screen type -> remove classes && add new class
//     for (let i = 0; i < classSelect.length; i++) {
//       // remove classes
//       for (let screenTypeEnumKey in ScreenTypeEnum) {
//         let classForRemove = GlobalStorageStatic.getClassName(
//           ScreenTypeEnum[screenTypeEnumKey]
//         );
//
//         // if this is not same same class -> remove
//         if (newClassName !== classForRemove) {
//           classSelect[i].classList.remove(classForRemove);
//         }
//       }
//
//       // add new class
//       classSelect[i].classList.add(newClassName);
//     }
//   }
// }
