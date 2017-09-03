import { StatsComponent } from './../components/stats/stats.component';
import { EventAdminPage } from './../pages/event-admin/event-admin.page';
import { AbstractEventComponent } from './../components/abstract-event/abstract-event.component';
import { AppComponent } from './app.component';
import { AuthActionsComponent } from '../components/auth/auth-actions/auth-actions.component';
import { PresentationService } from './../services/presentation.service';
import { StatPresentationListComponent } from './../components/stat-presentation-list/stat-presentation-list.component';
import { StatItemComponent } from './../components/stat-item/stat-item.component';
import { AuthService } from '../services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { ConstantsService } from '../services/constants.service';
import { DayService } from '../services/day.service';
import { DaysListComponent } from '../components/days-list/days-list.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { EventAbstractComponent } from '../components/event-abstract/event-abstract.component';
import { EventComponent } from '../components/event/event.component';
import { EventPage } from '../pages/event/event.page';
import { EventService } from '../services/event.service';
import { EventsListComponent } from '../components/events-list/events-list.component';
import { EventsPage } from '../pages/events/events.page';
import { FilteredEventsPage } from '../pages/filtered-events/filtered-events.page';
import { HomePage } from '../pages/home/home.page';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { TopNavbarComponent } from '../components/top-navbar/top-navbar.component';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWTService } from '../services/jwt.service';
import { LocalStorageService } from '../services/local-storage.service';
import { LocationService } from '../services/location.service';
import { MapsComponent } from '../components/maps/maps.component';
import { PresentationsPage } from '../pages/presentations/presentations.page';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UtilsService } from '../services/utils.service';
import { JWTInterceptor } from '../services/jwt.interceptor.service';
import { StatsService } from './../services/stats.service'; 

const components = [
    // components
    AppComponent,
    EventsListComponent,
    SideMenuComponent,
    TopNavbarComponent,
    EventComponent,
    DaysListComponent,
    EventAbstractComponent,
    AuthActionsComponent,
    StatItemComponent,
    StatPresentationListComponent,
    MapsComponent,
    StatsComponent,
    // pages
    HomePage,
    EventsPage,
    EventPage,
    FilteredEventsPage,
    EventPage,
    EventAdminPage,
    PresentationsPage
];

@NgModule({
    declarations: components,
    imports: [
        HttpModule,
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
        DayService,
        ConstantsService,
        AuthService,
        JWTService,
        LocationService,
        UtilsService,
        PresentationService,
        JWTService,
        StatsService
    ]
})
export class AppModule {
}
