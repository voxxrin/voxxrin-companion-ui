import { Event } from '../../models/event.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventPage } from '../event/event.page';

@IonicPage({
    segment: ''
})
@Component({
    templateUrl: 'filtered-events.page.html'
})
export class FilteredEventsPage {

    public events: Event[];

    constructor(private navController: NavController, private navParams: NavParams) {
        this.events = navParams.data.events;
    }

    public navigateToEvent(event: Event): void {
        this.navController.push('EventPage', { eventId: event.eventId }, { animate: true, direction: 'forward' });
    }
}
