import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
// @ts-ignore
import { ConnectAppControllerSelectors } from '@workspace/connect/app-controller';
import { ScreenDetectorService } from '../../../../../../../../../../../libs/mz/screen-detector/src/service/screen-detector.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mz-web-base-app-menu-block',
  templateUrl: './app-menu-block.component.html',
  styleUrls: ['./app-menu-block.component.scss']
})
export class AppMenuBlockComponent {// implements OnInit, OnDestroy
  // private destroy$: Subject<boolean> = new Subject();
  //
  // public currentAppId: string;
  // public appList: ConnectAppsListInterface[];
  // public resultAppList: ConnectAppsListInterface[];
  // public appStorage: ConnectAppsStorageInterface;
  // public screenDetectorType: string;
  //
  // constructor(
  //   private store: Store<ConnectAppControllerInerface>,
  //   private screenDetector: ScreenDetectorService
  // ) {}
  //
  // ngOnInit() {
  //   //@ - подписка на изменение экрана
  //   this.screenDetector.subscription$
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(answer => {
  //       this.screenDetectorType = answer.type;
  //       this.updateAppList();
  //     });
  //
  //   //@ - подписка на изменения данных приложения
  //   this.store
  //     .select(ConnectAppControllerSelectors.getApps)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(apps => {
  //       this.appStorage = apps.storage;
  //       this.appList = apps.list;
  //       this.currentAppId = apps.currentId;
  //       this.updateAppList();
  //     });
  // }
  //
  // ngOnDestroy() {
  //   this.destroy$.next(true);
  //   this.destroy$.unsubscribe();
  // }
  //
  // //@ - получить список приложений с правильным порядком (для мобильных и для компьютеров)
  // private getAppList(): ConnectAppsListInterface[] {
  //   if (!this.screenDetectorType || !this.appList || !this.currentAppId) return;
  //   let resultArray = [],
  //     currentApp: any,
  //     currentAppIndex: number,
  //     screenType: string = this.screenDetectorType;
  //
  //   for (let idx in this.appList) {
  //     let app = this.appList[idx];
  //     if (app.id !== this.currentAppId) resultArray.push(app);
  //     else {
  //       currentAppIndex = parseInt(idx, 10);
  //       currentApp = app;
  //     }
  //   }
  //
  //   // if mobile screen size -> to center app
  //   resultArray.splice(
  //     // if mobile screen size (+)-> add to center app (-)-> add to order
  //     screenType === 'small' ? 2 : currentAppIndex,
  //     0,
  //     currentApp
  //   );
  //
  //   return resultArray;
  // }
  //
  // //@ - обновить список приложений для правильного порядка на мобильных и на компьютерах
  // private updateAppList() {
  //   this.resultAppList = this.getAppList();
  // }
  //
  // //@ - поменять приложение
  // public changeAppp(appId: AppsIdEnum) {
  //   // if this new app
  //   if (appId !== this.currentAppId) {
  //     this.store.dispatch(new SwitchAppAction(appId));
  //   }
  // }
}
