import { Event } from './../../models/event';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent {

  @Input() events : Event[];

  constructor() {
  }

}
