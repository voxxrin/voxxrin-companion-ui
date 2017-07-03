import { ConstantsService } from './../../services/constants.service';
import { EventEmitter, Output } from '@angular/core';
import { Event } from './../../models/event.model';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

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
