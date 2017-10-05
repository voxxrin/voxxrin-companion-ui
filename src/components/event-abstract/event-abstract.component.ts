import { Event } from '../../models/event.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'event-abstract',
    templateUrl: 'event-abstract.component.html'
})
export class EventAbstractComponent {

    @Input() event: Event;
    @Output() adminButtonSelected: EventEmitter<Event> = new EventEmitter<Event>();

    goToEventAdministration(): void {
        this.adminButtonSelected.emit();
    }
}
