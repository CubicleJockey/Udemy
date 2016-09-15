import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ServicesDiAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { LogService } from './app/service/log.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(ServicesDiAppComponent, [HTTP_PROVIDERS, LogService]);

