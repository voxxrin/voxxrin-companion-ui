import { Event } from './../../models/event.model';
import { User } from './../../models/user.model';
import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
    selector: 'event-abstract',
    templateUrl: 'event-abstract.component.html'
})
export class EventAbstractComponent implements OnInit {

    @Input() event: Event;
    @Output() adminButtonSelected: EventEmitter<Event> = new EventEmitter<Event>();

    public isAdmin: boolean;

    constructor(private authService: AuthService, private iab: InAppBrowser) { }

    ngOnInit() {
        this.authService.currentUser().subscribe(user => this.setUserRights(user));
    }

    public setUserRights(currentUser?: User) {
        if (currentUser) {
            this.isAdmin = _.some(currentUser.principalRoles, (obj) => {
                return obj.indexOf(this.event.eventId) >= 0;
            });
        } else {
            this.isAdmin = false;
        }
    }

    public openUrl(url: string): void {
        this.iab.create(url, '_system');
    }
}
