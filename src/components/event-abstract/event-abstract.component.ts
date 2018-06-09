import { Event } from './../../models/event.model';
import { User } from './../../models/user.model';
import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'event-abstract',
    templateUrl: 'event-abstract.component.html'
})
export class EventAbstractComponent implements OnInit {

    @Input() event: Event;
    @Output() adminButtonSelected: EventEmitter<Event> = new EventEmitter<Event>();

    public isAdmin: boolean;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.currentUser().filter(res => res != null).subscribe(user => this.setUserRights(user)); //this.setUserRights(currentUser));
    }

    goToEventAdministration(): void {
        this.adminButtonSelected.emit();
    }

    setUserRights(currentUser: User) {
        let adminEventRole = _.find(currentUser.principalRoles, (obj) => {
            return obj.indexOf(this.event.eventId) >= 0;
        });
        this.isAdmin = false;
        if (adminEventRole) {
            this.isAdmin = true;
        }
    }
}
