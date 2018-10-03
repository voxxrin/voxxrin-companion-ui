import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular'
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
                private eventService: EventService,
                private presentationService: PresentationService,
                public constants: ConstantsService,
                authService: AuthService) {
        super(authService);
    }

    ionViewWillEnter() {
        this.eventService
            .fetchEvents()
            .map(events => _.chain(events).orderBy('from', 'desc').value())
            .subscribe(events => this.getPresentationsByEvent(events));
    }

    private getPresentationsByEvent(events: Event[]) {
        this.presentationService
            .getFavoritePresentations()
            .subscribe(eventPresentations => {
                eventPresentations.forEach(eventPresentation => {
                    eventPresentation.event  = events.find(e => e.eventId == eventPresentation.eventId);
                });
                this.favoritePresentations = eventPresentations;
            });
    }

    public navigateToPresentation(presentation: Presentation): void {
        const params = { presentationId: presentation._id, presentations: _.flatMap(this.favoritePresentations, e => e.presentations) };
        this.navController.push('PresentationPage', params, { animate: true, direction: 'forward' })
    }
}
