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
            .fetchAllPresentations()
            .subscribe(presentations => {
                console.log(presentations.filter(p => p.favorite));
                this.favoritePresentations = _.chain(presentations)
                    .filter(p => p.favorite)
                    .groupBy(p => p.eventId)
                    .map((presentations, eventId) => new EventPresentations(events.find(e => e._id == eventId), presentations))
                    .value();
                console.log(this.favoritePresentations);
            });
    }
}
