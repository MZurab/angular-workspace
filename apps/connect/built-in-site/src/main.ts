import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {AppBrowserModule} from "./app/app.browser.module";

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.log(err));

platformBrowserDynamic()
  .bootstrapModule(AppBrowserModule)
  .catch(err => console.log(err));
