import { Event } from '../../models/event.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-abstract',
    templateUrl: 'event-abstract.component.html'
})
export class EventAbstractComponent {

    @Input() event: Event;
}
