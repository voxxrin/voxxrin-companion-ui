import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { PresentationsListComponent } from './presentations-list/presentations-list.component';
import { EventAbstractComponent } from './event-abstract/event-abstract.component';
import { EventsListComponent } from './events-list/events-list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { MapsComponent } from './maps/maps.component';
import { EventComponent } from './event/event.component';
import { StatsComponent } from './stats/stats.component';
import { DaysListComponent } from './days-list/days-list.component';
import { PresentationComponent } from './presentation/presentation.component';
import { StatItemComponent } from './stat-item/stat-item.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { ServicesModule } from '../services/services.module';
import { HomeActionsComponent } from './home-actions/home-actions.component';
import { AttachContentModalComponent } from './attach-content-modal/attach-content-modal.component';

let components: any[] = [
    EventsListComponent,
    SideMenuComponent,
    TopNavbarComponent,
    EventComponent,
    DaysListComponent,
    EventAbstractComponent,
    HomeActionsComponent,
    StatItemComponent,
    MapsComponent,
    StatsComponent,
    PresentationsListComponent,
    AttachContentModalComponent,
    TwitterFeedComponent,
    PresentationComponent
];

@NgModule({
    imports: [
        IonicModule,
        ServicesModule
    ],
    declarations: components,
    entryComponents: components,
    exports: [components, ServicesModule]
})
export class ComponentsModule {

}