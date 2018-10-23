import { Network } from '@ionic-native/network';
import 'moment';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AppComponent } from './app.component';
import { PagesModule } from '../pages/pages.module';
import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
    imports: [
        // 3rd party modules
        HttpModule,
        HttpClientModule,
        BrowserModule,
        IonicModule.forRoot(AppComponent, {swipeBackEnabled: false}),
        IonicPageModule,
        // app modules
        PagesModule,
        ComponentsModule,
        DirectivesModule,
        ServicesModule
    ],
    bootstrap: [IonicApp],
    declarations: [AppComponent],
    entryComponents: [AppComponent],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        { provide: InAppBrowser, useClass: InAppBrowser },
        { provide: Network, useClass: Network}
    ]
})
export class AppModule {
}
