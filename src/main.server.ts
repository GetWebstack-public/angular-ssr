import 'zone.js/node';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { serverAppConfig } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, serverAppConfig);

export default bootstrap;
