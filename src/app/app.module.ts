import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { VoxxrinApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventsListComponent } from '../components/events-list/events-list';

@NgModule({
  declarations: [
    VoxxrinApp,
    HomePage,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(VoxxrinApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    VoxxrinApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
