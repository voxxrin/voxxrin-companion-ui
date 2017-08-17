import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Event } from '../../models/event.model';
import { Day } from './../../models/day.model';
import { DayService } from "../../services/day.service";
import { Location } from '../../models/location.model';

@Component({
    selector: 'event',
    templateUrl: './event.component.html'
})
export class EventComponent implements OnInit {

    days: Day[];
    location: Location;
    @Input() event: Event;    
    @Output() daySelected: EventEmitter<Day> = new EventEmitter<Day>();


    constructor(private locationService: LocationService, private dayService: DayService) { }

    ngOnInit(): void {
        this.locationService.geocode(this.event.location).subscribe(location => this.location = location);
        this.dayService.fetchDays(this.event).subscribe(days => this.days = days);
    }

    onSelectedDay(day: Day): void {
    	this.daySelected.emit(day);
    }
}