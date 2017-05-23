import { Event } from './../../models/event';
import { Observable } from 'rxjs/Rx';
import { EventService } from './../../services/event-service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'events.page.html'
})
export class EventsPage implements OnInit {

  events : Event[];

  constructor(private navCtrl: NavController, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.fetchEvents().subscribe(events => this.events = events);
  }

}
