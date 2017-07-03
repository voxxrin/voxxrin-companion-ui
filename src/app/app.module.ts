import { AuthService } from './../services/auth.service';
import { ConstantsService } from './../services/constants.service';
import { EventService } from './../services/event.service';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalStorageService } from './../services/local-storage.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicModule, IonicErrorHandler, IonicApp } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { EventPage } from './../pages/event/event.page';
import { EventsPage } from './../pages/events/events.page';
import { HomePage } from './../pages/home/home.page';
import { EventComponent } from './../components/event/event.component';
import { TopNavbarComponent } from './../components/top-navbar/top-navbar.component';
import { SideMenuComponent } from './../components/side-menu/side-menu.component';
import { AuthActionsComponent } from './../components/auth/auth-actions/auth-actions.component';
import { EventsListComponent } from './../components/events-list/events-list.component';
import { AppComponent } from './app.component';

const components = [
    // components
    AppComponent,
    EventsListComponent,
    SideMenuComponent,
    TopNavbarComponent,
    EventComponent,
    AuthActionsComponent,
    // pages
    HomePage,
    EventsPage,
    EventPage
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
        LocalStorageService,
        StatusBar,
        SplashScreen,
        EventService,
        ConstantsService,
        AuthService
    ]
})
export class AppModule {
}
