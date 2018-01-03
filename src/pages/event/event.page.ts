import { EventAdminPage } from '../event-admin/event-admin.page';
import { Day } from '../../models/day.model';
import { PresentationsPage } from '../presentations/presentations.page';
import { Event } from '../../models/event.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { TwitterFeedPage } from '../twitter-feed/twitter-feed.page';
import { EventService } from '../../services/event.service';

@IonicPage({
    segment: 'event/:eventId'
})
@Component({
    templateUrl: 'event.page.html'
})
export class EventPage implements OnInit {

    event: Event;

    constructor(private navController: NavController, private navParams: NavParams, private eventService: EventService) { }

    ngOnInit(): void {
        this.eventService.fetchEventById(this.navParams.data.eventId).subscribe(event => this.event = event);
    }

    public navigateToPresentationsPage(day: Day): void {
        const dayId = day.externalId || day._id;
        const params = { eventId: this.event.eventId, dayId: dayId };
        this.navController.push('PresentationsPage', params, { animate: true, direction: 'forward' });
    }

    public navigateToEventAdminPage(): void {
        this.navController.push('EventAdminPage', { eventId: this.event.eventId });
    }

    public displayTwitterFeed(): void {
        this.navController.push('TwitterFeedPage', { eventId: this.event.eventId });
    }
}
