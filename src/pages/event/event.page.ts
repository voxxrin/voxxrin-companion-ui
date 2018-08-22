import { AuthService } from './../../services/auth.service';
import { User } from './../../models/user.model';
import { EventAdminPage } from '../event-admin/event-admin.page';
import { Day } from '../../models/day.model';
import { PresentationsPage } from '../presentations/presentations.page';
import { Event } from '../../models/event.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { TwitterFeedPage } from '../twitter-feed/twitter-feed.page';
import { EventService } from '../../services/event.service';
import * as _ from 'lodash';

@IonicPage({
    segment: 'event/:eventId'
})
@Component({
    templateUrl: 'event.page.html'
})
export class EventPage implements OnInit {

    event: Event;

    public isAdmin: boolean;

    constructor(private navController: NavController, private navParams: NavParams, private eventService: EventService, private authService: AuthService) { }

    ngOnInit(): void {
        this.eventService.fetchEventById(this.navParams.data.eventId).subscribe(event => {
            this.event = event;
            console.log(event);
            //Check admin rights
            this.authService.currentUser().subscribe(user => this.setUserRights(user));
        });
    }

    /**
     * Admin part
     */
    setUserRights(currentUser?: User) {
        console.log(currentUser)
        if (currentUser) {
            this.isAdmin = _.some(currentUser.principalRoles, (obj) => {
                return obj.indexOf(this.event.eventId) >= 0;
            });
        } else {
            this.isAdmin = false;
        }
    }

    /**
     * Navigation
     */

    public navigateToPresentationsPage(day: Day): void {
        const dayId = day.externalId || day._id;
        const params = { eventId: this.event.eventId, dayId: dayId };
        this.navController.push('PresentationsPage', params, { animate: true, direction: 'forward' });
    }

    public navigateToEventAdminPage(): void {
        this.navController.push('EventAdminPage', { eventId: this.event.eventId });
    }

    public displayTwitterFeed(): void {
        this.navController.push('TwitterFeedPage', { eventId: this.event.eventId });
    }
}
