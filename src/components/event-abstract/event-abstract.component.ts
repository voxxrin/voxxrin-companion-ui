import { Event } from './../../models/event.model';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'event-abstract',
    templateUrl: 'event-abstract.component.html'
})
export class EventAbstractComponent {

    @Input() event: Event;

    constructor() {
    }
}
