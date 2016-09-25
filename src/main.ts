/// <reference path="./seamless-immutable.d.ts" />

import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

// import * as $ from 'jquery';

if (environment.production) {
  enableProdMode();
}

// $(document.body).append('<amc-root></amc-root>'));
document.body.appendChild(document.createElement('amc-root'));
platformBrowserDynamic().bootstrapModule(AppModule);
