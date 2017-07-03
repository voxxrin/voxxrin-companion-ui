import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'event.page.html'
})
export class EventPage implements OnInit {

    event: Event;

    constructor(private navParams: NavParams) { }

    ngOnInit(): void {
        this.event = this.navParams.data.event;
    }
}
