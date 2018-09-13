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
import { JWTInterceptor } from './jwt.interceptor.service';
import { TwitterIdPipe } from './twitter-id.pipe';
import { TimeSlotService } from './time-slot.service';
import { RatingService } from './rating.service';
import { PushService } from './push.service';

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
    DeviceService
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
        { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }
    ],
    declarations: pipes,
    exports: pipes
})
export class ServicesModule {

}