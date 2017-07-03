import { Event } from '../../models/event.model';
import { Component } from '@angular/core';
import { App, NavParams } from 'ionic-angular';
import { EventPage } from '../event/event.page';

@Component({
    templateUrl: 'filtered-events.page.html'
})
export class FilteredEventsPage {

    public events: Event[];

    constructor(private app: App, private navParams: NavParams) {
        this.events = navParams.data.events;
    }

    public navigateToEvent(event: Event): void {
        this.app.getRootNav().setRoot(EventPage, { event: event }, { animate: true, direction: 'forward' });
    }
}
