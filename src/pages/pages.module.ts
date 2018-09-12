import { NgModule } from '@angular/core';

import { PresentationPageModule } from './presentation/presentation.page.module';
import { HomePageModule } from './home/home.page.module';
import { EventPageModule } from './event/event.page.module';
import { EventAdminPageModule } from './event-admin/event-admin.page.module';
import { EventsPageModule } from './events/events.page.module';
import { PresentationsPageModule } from './presentations/presentations.page.module';
import { TwitterFeedPageModule } from './twitter-feed/twitter-feed.page.module';
import { EventPresentationsAdminPageModule } from './event-presentations-admin/event-presentations-admin.page.module';
import { EventDataAdminPageModule } from './event-data-admin/event-data-admin.page.module';
import { EventStatisticsAdminPageModule } from './event-statistics-admin/event-statistics-admin.page.module';
import { FavoritesPageModule } from './favorites/favorites.page.module';
import { PresentationAdminPageModule } from './presentation-admin/presentation-admin.page.module';

@NgModule({
    imports: [
        HomePageModule,
        EventsPageModule,
        EventPageModule,
        EventAdminPageModule,
        EventDataAdminPageModule,
        EventStatisticsAdminPageModule,
        EventPresentationsAdminPageModule,
        PresentationsPageModule,
        PresentationPageModule,
        PresentationAdminPageModule,
        TwitterFeedPageModule,
        FavoritesPageModule
    ]
})
export class PagesModule {
}