import { LoadingService } from './../../services/loading.service';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, Loading } from 'ionic-angular';
import * as moment from 'moment';
import * as _ from 'lodash';
import { StoredEventDataService } from '../../services/stored-event-data.service';

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

    constructor(private navController: NavController, 
                private eventService: EventService, 
                private loadingService: LoadingService,
                private storedEventDataService: StoredEventDataService) { }

    ngOnInit(): void {
        let loading: Loading = this.loadingService.launchLoader();
        loading.present().then(() => {
            this.eventService.fetchEvents().subscribe(events => {
                const now = moment();
                this.allEvents = _.chain(events).orderBy('from', 'desc').value();
                this.futureEvents = _.chain(events.filter(event => event.from.isAfter(now))).orderBy('from', 'asc').value();
                this.pastEvents = _.chain(events.filter(event => event.from.isSameOrBefore(now))).orderBy('from', 'desc').value();
                this.storedEventDataService.storeEventsData(events);
                loading.dismiss();
            });
        });
    }

    public navigateToEvent(event: Event) {
        this.navController.push('EventPage', { eventId: event.eventId }, { animate: true, direction: 'forward' });
    }
}
