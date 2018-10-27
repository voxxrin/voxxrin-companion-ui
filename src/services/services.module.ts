import { ConnectivityService } from './connectivity.service';
import { LoadingService } from './loading.service';
import { DeviceService } from './device.service';
import { StatusBar } from '@ionic-native/status-bar';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocalStorageService } from './local-storage.service';
import { ConstantsService } from './constants.service';
import { LocationService } from './location.service';
import { DayService } from './day.service';
import { JWTService } from './jwt.service';
import { SpeakerNamesPipe } from './speaker-names.pipe';
import { EventService } from './event.service';
import { AuthService } from './auth.service';
import { FeedService } from './feed.service';
import { UtilsService } from './utils.service';
import { StatsService } from './stats.service';
import { PresentationService } from './presentation.service';
import { TwitterIdPipe } from './twitter-id.pipe';
import { TimeSlotService } from './time-slot.service';
import { RatingService } from './rating.service';
import { PushService } from './push.service';
import { EnvironmentService } from './environment.service';
import { JWTInterceptor } from './interceptors/jwt.interceptor';
import { EventCacheInterceptor } from './interceptors/event.cache-interceptor';
import { EventDayCacheInterceptor } from './interceptors/event-day.cache-interceptor';
import { EventDaysCacheInterceptor } from './interceptors/event-days.cache-interceptor';
import { PresentationCacheInterceptor } from './interceptors/presentation.cache-interceptor';
import { PresentationsCacheInterceptor } from './interceptors/presentations.cache-interceptor';
import { StoredEventDataService } from './stored-event-data.service';
import { EventsCacheInterceptor } from './interceptors/events.cache-interceptor';

let services: any[] = [
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
    StatsService,
    FeedService,
    RatingService,
    TimeSlotService,
    PushService,
    DeviceService,
    EnvironmentService,
    LoadingService,
    StoredEventDataService,
    ConnectivityService
];

let pipes: any[] = [
    SpeakerNamesPipe,
    TwitterIdPipe
];

@NgModule({
    imports: [
        HttpModule,
        HttpClientModule
    ],
    providers: [
        services,
        pipes,
        { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: EventCacheInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: EventDayCacheInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: EventDaysCacheInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: EventsCacheInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: PresentationCacheInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: PresentationsCacheInterceptor, multi: true }
    ],
    declarations: pipes,
    exports: pipes
})
export class ServicesModule {

}