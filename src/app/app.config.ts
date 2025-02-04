import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import routeConfig from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideClientHydration()]
};
