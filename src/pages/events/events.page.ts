import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { Component, OnInit } from '@angular/core';
import { FilteredEventsPage } from '../filtered-events/filtered-events.page';

@Component({
    templateUrl: 'events.page.html'
})
export class EventsPage implements OnInit {

    events: Event[];

    futureEventsPage: any = FilteredEventsPage;
    pastEventsPage: any = FilteredEventsPage;
    allEventsPage: any = FilteredEventsPage;

    constructor(private eventService: EventService) {}

    ngOnInit(): void {
        this.eventService.fetchEvents().subscribe(events => this.events = events);
    }
}
