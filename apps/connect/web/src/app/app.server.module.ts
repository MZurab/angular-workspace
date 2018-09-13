import { NgModule } from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {ModuleMapLoaderModule} from "@nguniversal/module-map-ngfactory-loader";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports:[
    BrowserModule.withServerTransition({ appId: 'connect-web' }),
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
  ]
})
export class AppServerModule {}
