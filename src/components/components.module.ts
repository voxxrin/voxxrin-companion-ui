import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { PresentationsListComponent } from './presentations-list/presentations-list.component';
import { EventAbstractComponent } from './event-abstract/event-abstract.component';
import { EventsListComponent } from './events-list/events-list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { EventComponent } from './event/event.component';
import { StatsComponent } from './stats/stats.component';
import { DaysListComponent } from './days-list/days-list.component';
import { PresentationComponent } from './presentation/presentation.component';
import { StatItemComponent } from './stat-item/stat-item.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { ServicesModule } from '../services/services.module';
import { HomeActionsComponent } from './home-actions/home-actions.component';
import { BingoRatingMatrixComponent } from './bingo-rating-matrix/bingo-rating-matrix.component';
import { BingoRatingModalComponent } from './bingo-rating-modal/bingo-rating-modal.component';
import { PresentationsListItemComponent } from './presentations-list-item/presentations-list-item';
import { PresentationAttachedContentListComponent } from './presentation-attached-content/presentation-attached-content-list/presentation-attached-content-list.component';
import { PresentationAttachedContentSubmitComponent } from './presentation-attached-content/presentation-attached-content-submit/presentation-attached-content-submit.component';
import { DirectivesModule } from '../directives/directives.module';
import { EnvironmentSwitcherModalComponent } from './environment-switcher-modal/environment-switcher-modal.component';

let components: any[] = [
    EventsListComponent,
    SideMenuComponent,
    TopNavbarComponent,
    EventComponent,
    DaysListComponent,
    EventAbstractComponent,
    HomeActionsComponent,
    StatItemComponent,
    StatsComponent,
    PresentationsListComponent,
    TwitterFeedComponent,
    PresentationComponent,
    BingoRatingMatrixComponent,
    BingoRatingModalComponent,
    PresentationsListItemComponent,
    PresentationAttachedContentListComponent,
    PresentationAttachedContentSubmitComponent,
    EnvironmentSwitcherModalComponent,
];

@NgModule({
    imports: [
        IonicModule,
        ServicesModule,
        DirectivesModule
    ],
    declarations: components,
    entryComponents: components,
    exports: [components, ServicesModule]
})
export class ComponentsModule {

}