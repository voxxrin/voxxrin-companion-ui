import { Event } from './../../models/event.model';
import { User } from './../../models/user.model';
import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'event-abstract',
    templateUrl: 'event-abstract.component.html'
})
export class EventAbstractComponent implements OnInit {

    @Input() event: Event;
    @Output() adminButtonSelected: EventEmitter<Event> = new EventEmitter<Event>();

    public isAdmin: boolean;

    constructor(private authService: AuthService) { }

    ngOnInit() {}
}
