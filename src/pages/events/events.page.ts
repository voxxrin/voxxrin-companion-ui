import { EventService } from './../../services/event.service';
import { EventPage } from './../event/event.page';
import { Event } from './../../models/event.model';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'events.page.html'
})
export class EventsPage implements OnInit {

    events: Event[];

    constructor(private navCtrl: NavController, private eventService: EventService) {
    }

    ngOnInit(): void {
        this.eventService.fetchEvents().subscribe(events => this.events = events);
    }

    navigateToEvent(event: Event): void {
        this.navCtrl.push(EventPage, { event: event });
    }
}
