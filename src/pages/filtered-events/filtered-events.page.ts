import { Event } from '../../models/event.model';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'filtered-events.page.html'
})
export class FilteredEventsPage {

    public events: Event[];

    constructor(private navParams: NavParams) {
        this.events = navParams.data.events;
    }
}
