import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from "@ngrx/store";
import {reducers} from "../../../web/src/app/reducers";
import {ConnectAppControllerModule} from "@mz/connect/app-controller";
import {MzDictionaryModule} from "@mz/mz/dictionary";
import {MzScreenDetectorModule} from "@mz/mz/screen-detector";
import {MzDictionaryInputTypeEnum} from "../../../../../libs/mz/dictionary/src/lib/res/@abstract/@enum/mz-common.enum";
// import {MzDictionaryInputTypeEnum} from "../../../../../libs/mz/dictionary/src/lib/res/@abstract/@enum/mz-common.enum";

@NgModule({
  bootstrap: [
    AppComponent
  ],

  imports:[
    BrowserModule.withServerTransition({appId: 'app-root'}),
    AppModule,


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
})
export class AppBrowserModule {
  constructor() {
    console.log('start AppBrowserModule');
  }
}
