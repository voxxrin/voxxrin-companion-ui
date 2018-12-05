import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Event } from '../../models/event.model';
import { Day } from '../../models/day.model';
import { DayService } from '../../services/day.service';
import { Location } from '../../models/location.model';
import { StoredEventDataService } from '../../services/stored-event-data.service';
import { PresentationService } from '../../services/presentation.service';
import { ConnectivityService } from '../../services/connectivity.service';

@Component({
    selector: 'event',
    templateUrl: './event.component.html'
})
export class EventComponent implements OnInit {

    @Input() event: Event;
    @Output() daySelected: EventEmitter<Day> = new EventEmitter<Day>();
    @Output() adminButtonSelected: EventEmitter<Event> = new EventEmitter<Event>();

    days: Day[];
    location: Location;

    constructor(private dayService: DayService,
                private presentationService: PresentationService,
                private storedEventDataService: StoredEventDataService,
                private connectivityService: ConnectivityService) { }

    ngOnInit(): void {
        this.dayService.fetchDays(this.event)
            .do(days => this.days = days)
            .filter((day, index) => this.connectivityService.isOnline())
            .flatMap(days => this.presentationService.fetchAllPresentationFromAnEvent(this.event._id))
            .subscribe(presentations => this.storedEventDataService.storeEventData(this.event, this.days, presentations));
    }

    onSelectedDay(day: Day): void {
    	this.daySelected.emit(day);
    }

    onSelectedAdminButton(): void {
        this.adminButtonSelected.emit();
    }
}