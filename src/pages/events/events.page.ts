import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IonicPage, NavController } from 'ionic-angular';

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

    constructor(private navController: NavController, private eventService: EventService) {}

    ngOnInit(): void {
        this.eventService.fetchEvents().subscribe(events => {
            this.allEvents = events;
            const now = moment();
            this.futureEvents = events.filter(event => event.from.isAfter(now));
            this.pastEvents = events.filter(event => event.from.isSameOrBefore(now));
        });
    }

    public navigateToEvent(event:Event){
        this.navController.push('EventPage', { eventId: event.eventId }, { animate: true, direction: 'forward' });
    }
}
