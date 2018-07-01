import { AdminStatisticsPageModule } from './admin-statistics/admin-statistics.module';
import { AdminPresentationsPageModule } from './admin-presentations/admin-presentations.module';
import { AdminEventDataPageModule } from './admin-event-data/admin-event-data.module';
import { AdminPresentationsPage } from './admin-presentations/admin-presentations';
import { AdminStatisticsPage } from './admin-statistics/admin-statistics';
import { AdminEventDataPage } from './admin-event-data/admin-event-data';
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
        TwitterFeedPageModule,
        AdminEventDataPageModule,
        AdminStatisticsPageModule,
        AdminPresentationsPageModule
    ]
})
export class PagesModule {
}