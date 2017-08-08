import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Event } from '../../models/event.model';
import { Location } from '../../models/location.model';

@Component({
    selector: 'event',
    templateUrl: './event.component.html'
})
export class EventComponent implements OnInit {

    @Input() event: Event;
    location: Location;

    constructor(private locationService: LocationService) { }

    ngOnInit(): void {
        this.locationService.geocode(this.event.location).subscribe(location => this.location = location);
    }
}