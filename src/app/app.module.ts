import { HttpModule } from '@angular/http';
import { TopNavbarComponent } from '../components/top-navbar/top-navbar.component';
import { EventsPage } from './../pages/events/events.page';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AppComponent } from './app.component';
import { EventsListComponent } from '../components/events-list/events-list.component';
import { HomePage } from '../pages/home/home.page';
import { EventService } from '../services/event-service';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';

const components = [
    // components
    AppComponent,
    EventsListComponent,
    SideMenuComponent,
    TopNavbarComponent,
    // pages
    HomePage,
    EventsPage
];

@NgModule({
    declarations: components,
    imports: [
        HttpModule,
        BrowserModule,
        IonicModule.forRoot(AppComponent)
    ],
    bootstrap: [IonicApp],
    entryComponents: components,
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        StatusBar,
        SplashScreen,
        EventService
    ]
})
export class AppModule {
}
