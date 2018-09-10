import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import {NgtUniversalModule} from "@ng-toolkit/universal";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    NgtUniversalModule,
    NxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
