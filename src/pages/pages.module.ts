import { NgModule } from '@angular/core';

import { PresentationPageModule } from './presentation/presentation.page.module';
import { HomePageModule } from './home/home.page.module';
import { EventPageModule } from './event/event.page.module';
import { EventAdminPageModule } from './event-admin/event-admin.page.module';
import { EventsPageModule } from './events/events.page.module';
import { PresentationsPageModule } from './presentations/presentations.page.module';
import { TwitterFeedPageModule } from './twitter-feed/twitter-feed.page.module';

@NgModule({
    imports: [
        HomePageModule,
        EventsPageModule,
        EventPageModule,
        EventAdminPageModule,
        PresentationsPageModule,
        PresentationPageModule,
        TwitterFeedPageModule
    ]
})
export class PagesModule {
}