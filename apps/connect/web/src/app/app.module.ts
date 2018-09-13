import { BrowserModule } from '@angular/platform-browser';
import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { MzScreenDetectorModule } from '../../../../../libs/mz/screen-detector/src';
import { MzDictionaryModule } from '../../../../../libs/mz/dictionary/src';
import {SignComponent} from "./view/sign/sign.component";
import {LkComponent} from "./view/lk/lk.component";
import {AppMenuBlockComponent} from "./view/lk/_subView/app-menu-left-footer-controller/_subView/app-menu-block/app-menu-block.component";
import {AppMenuLeftFooterControllerComponent} from "./view/lk/_subView/app-menu-left-footer-controller/app-menu-left-footer-controller.component";
import {CommonModule, isPlatformBrowser} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {MzDictionaryInputTypeEnum} from "../../../../../libs/mz/dictionary/src/lib/res/@abstract/@enum/mz-common.enum";
import {ConnectAppControllerModule} from "../../../../../libs/connect/app-controller/src";
import {reducers} from "./reducers";
import {NgtUniversalModule} from "@ng-toolkit/universal";

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    LkComponent,
    AppMenuBlockComponent,
    AppMenuLeftFooterControllerComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    NxModule.forRoot(),
    // StoreModule.forRoot({ connect: connectAppControllerReducer }),
    // ApolloBoostModule,

    //NEED
    // MzDictionaryModule.forRoot({
    //   type: MzDictionaryInputTypeEnum.graphQl,
    //   url: 'https://ramman.net/api/test'
    // }),

    // ConnectAppControllerModule
    // StoreModule.forFeature(
    //   'connectAppController',
    //   connectAppControllerReducer,
    //   {
    //     initialState: connectAppControllerInitialState
    //   }
    // ),

    StoreModule.forRoot(reducers),
    ConnectAppControllerModule,

    MzDictionaryModule,
    MzScreenDetectorModule.forRoot({
        medium: 768,
        large: 1024
      },
      150,
      ['connect-web-base-lk']
    ),
  ],
  providers: [
    {
      provide: 'mzDictionaryConfig',
      useValue: {
        type: MzDictionaryInputTypeEnum.graphQl,
        url: 'https://ramman.net/api/test'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // need for server rendering
  constructor (
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId) ? 'browser' : 'server';
    console.warn(`Running ${platform} with appId=${appId}, platformId=${platformId}`);
  }
}
