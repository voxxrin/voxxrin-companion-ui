import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { Component, OnInit } from '@angular/core';
import { FilteredEventsPage } from '../filtered-events/filtered-events.page';
import * as moment from 'moment';

@Component({
    templateUrl: 'events.page.html'
})
export class EventsPage implements OnInit {

    allEvents: Event[];
    futureEvents: Event[];
    pastEvents: Event[];

    futureEventsPage: any = FilteredEventsPage;
    pastEventsPage: any = FilteredEventsPage;
    allEventsPage: any = FilteredEventsPage;

    constructor(private eventService: EventService) {}

    ngOnInit(): void {
        this.eventService.fetchEvents().subscribe(events => {
            this.allEvents = events;
            const now = moment();
            this.futureEvents = events.filter(event => event.from.isAfter(now));
            this.pastEvents = events.filter(event => event.from.isSameOrBefore(now));
        });
    }
}
