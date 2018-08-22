import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';
import { AbstractAuthenticatedComponent } from '../../components/abstract-authenticated-component';
import { PresentationService } from '../../services/presentation.service';
import { Presentation } from '../../models/presentation.model';
import { Event } from '../../models/event.model';
import * as _ from 'lodash';
import { EventPresentations } from '../../models/event-presentations.model';
import { ConstantsService } from '../../services/constants.service';

@IonicPage({
    segment: 'favorites'
})
@Component({
    templateUrl: 'favorites.page.html',
})
export class FavoritesPage extends AbstractAuthenticatedComponent{

    public favoritePresentations: EventPresentations[];

    constructor(private navController:NavController,
                private navParams: NavParams,
                private eventService: EventService,
                private presentationService: PresentationService,
                public constants: ConstantsService,
                authService: AuthService
            ) {
        super(authService);
    }

    ionViewWillEnter() {
        console.log('ionViewDidLoad FavoritesPage');

        this.eventService.fetchEvents()
                         .subscribe( events => this.getPresentationsByEvent(events));
    }

    private getPresentationsByEvent(events: Event[]) {
        this.presentationService
            .getFavoritePresentations()
            .subscribe(eventPresentations => {
                eventPresentations.forEach(eventPresentation => {
                    eventPresentation.event  = events.find(e => e.eventId == eventPresentation.eventId);
                });
                this.favoritePresentations = eventPresentations;
                console.log(this.favoritePresentations);
            });
    }
}
