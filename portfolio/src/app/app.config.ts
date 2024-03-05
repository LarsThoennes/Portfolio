import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import * as AOS from 'aos';

export const initAOS = () => {
  AOS.init();
};


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
