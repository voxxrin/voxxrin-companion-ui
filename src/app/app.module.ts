import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AppComponent } from './app.component';
import { EventsListComponent } from '../components/events-list/events-list.component';
import { HomePage } from '../pages/home/home.page';
import { EventService } from '../services/event-service';

@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        EventsListComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(AppComponent)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        AppComponent,
        HomePage
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        StatusBar,
        SplashScreen,
        EventService
    ]
})
export class AppModule {
}
