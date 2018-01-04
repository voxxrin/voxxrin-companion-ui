import 'moment';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';

import { AppComponent } from './app.component';
import { AbstractEventComponent } from './../components/abstract-event/abstract-event.component';
import { StatPresentationListComponent } from './../components/stat-presentation-list/stat-presentation-list.component';
import { PagesModule } from '../pages/pages.module';
import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
    imports: [
        // 3rd party modules
        HttpModule,
        HttpClientModule,
        BrowserModule,
        IonicModule.forRoot(AppComponent),
        IonicPageModule,
        // app modules
        PagesModule,
        ComponentsModule,
        ServicesModule
    ],
    bootstrap: [IonicApp],
    declarations: [AppComponent],
    entryComponents: [AppComponent],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {
}
