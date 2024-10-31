import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
platformBrowserDynamic
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
