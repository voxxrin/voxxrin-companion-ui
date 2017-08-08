import { AuthService } from '../services/auth.service';
import { ConstantsService } from '../services/constants.service';
import { EventService } from '../services/event.service';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalStorageService } from '../services/local-storage.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { EventComponent } from '../components/event/event.component';
import { TopNavbarComponent } from '../components/top-navbar/top-navbar.component';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { AuthActionsComponent } from '../components/auth/auth-actions/auth-actions.component';
import { EventsListComponent } from '../components/events-list/events-list.component';
import { AppComponent } from './app.component';
import { FilteredEventsPage } from '../pages/filtered-events/filtered-events.page';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWTService } from '../services/jwt.service';
import { JWTInterceptor } from '../services/jwt.interceptor.service';
import { HttpModule } from '@angular/http';
import { EventPage } from './../pages/event/event.page';
import { EventsPage } from './../pages/events/events.page';
import { HomePage } from './../pages/home/home.page';
import { StatsPage } from './../pages/stats/stats.page';
import { StatsService } from './../services/stats.service'; 

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
    FilteredEventsPage,
    EventPage,
    StatsPage
];

@NgModule({
    declarations: components,
    imports: [
        HttpClientModule,
        BrowserModule,
        IonicModule.forRoot(AppComponent)
    ],
    bootstrap: [IonicApp],
    entryComponents: components,
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
        LocalStorageService,
        StatusBar,
        SplashScreen,
        EventService,
        ConstantsService,
        AuthService,
        JWTService,
        StatsService
    ]
})
export class AppModule {
}
