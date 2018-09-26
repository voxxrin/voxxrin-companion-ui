import { LoadingService } from './../../services/loading.service';
import { AuthService } from './../../services/auth.service';
import { User } from './../../models/user.model';
import { EventAdminPage } from '../event-admin/event-admin.page';
import { Day } from '../../models/day.model';
import { PresentationsPage } from '../presentations/presentations.page';
import { Event } from '../../models/event.model';
import { IonicPage, NavController, NavParams, Loading } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
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

    constructor(private navController: NavController, private navParams: NavParams, private eventService: EventService, private authService: AuthService, private loadingService: LoadingService) { }

    ngOnInit(): void {
        let loading: Loading = this.loadingService.launchLoader();
        loading.present().then(() => {
            this.eventService.fetchEventById(this.navParams.data.eventId).subscribe(event => {
                this.event = event;
                this.authService.currentUser().subscribe(user => this.setUserRights(user));
                loading.dismiss();
            });
        });
    }

    /**
     * Admin part
     */
    setUserRights(currentUser?: User) {
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
