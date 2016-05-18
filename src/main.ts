import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TwitterSearchAppComponent} from './app/twitter-search.component';
import {environment} from './app/environment';
import {HTTP_PROVIDERS} from '@angular/http'

if (environment.production) {
  enableProdMode();
}

bootstrap(TwitterSearchAppComponent, [HTTP_PROVIDERS]);

