import { ConstantsService } from '../../services/constants.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../models/event.model';

@Component({
    selector: 'events-list',
    templateUrl: 'events-list.component.html'
})
export class EventsListComponent {

    @Input() events: Event[];
    @Output() eventSelected: EventEmitter<Event> = new EventEmitter<Event>();

    constructor(public constants: ConstantsService) {
    }

    onSelectedEvent(event: Event): void {
        this.eventSelected.emit(event);
    }
}
