import { LoadingService } from './../../services/loading.service';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IonicPage, NavController, Loading } from 'ionic-angular';

@IonicPage({
    segment: 'events'
})
@Component({
    templateUrl: 'events.page.html'
})
export class EventsPage implements OnInit {

    allEvents: Event[];
    futureEvents: Event[];
    pastEvents: Event[];

    eventFilter: string = "futureEvents";

    constructor(private navController: NavController, private eventService: EventService, private loadingService: LoadingService) { }

    ngOnInit(): void {
        let loading: Loading = this.loadingService.launchLoader();
        loading.present().then(() => {
            this.eventService.fetchEvents().subscribe(events => {
                this.allEvents = events;
                const now = moment();
                this.futureEvents = events.filter(event => event.from.isAfter(now));
                this.pastEvents = events.filter(event => event.from.isSameOrBefore(now));
                loading.dismiss();
            });
        });
    }

    public navigateToEvent(event: Event) {
        this.navController.push('EventPage', { eventId: event.eventId }, { animate: true, direction: 'forward' });
    }
}
