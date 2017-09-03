import { EventAdminPage } from './../event-admin/event-admin.page';
import { Day } from './../../models/day.model';
import { PresentationsPage } from '../presentations/presentations.page';
import { Event } from './../../models/event.model';
import { App, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'event.page.html'
})
export class EventPage implements OnInit {

    event: Event;

    constructor(private app: App, private navParams: NavParams) { }

    ngOnInit(): void {
        this.event = this.navParams.data.event;
    }

    public navigateToPresentationsPage(day: Day): void {
        this.app.getRootNav().push(PresentationsPage, { day: day }, { animate: true, direction: 'forward' });
    }

    public navigateToEventAdminPage(): void {
        this.app.getRootNav().push(EventAdminPage, { selectedEvent: this.event });
    }
}
