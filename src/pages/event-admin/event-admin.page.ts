import { IonicPage, ModalController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { PresentationModalComponent } from '../../components/presentation-modal/presentation-modal.component';
import { Presentation } from '../../models/presentation.model';
import { PresentationService } from '../../services/presentation.service';
import { Statistic } from '../../models/stats.model';
import { StatsService } from '../../services/stats.service';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@IonicPage({
    segment: 'event/:eventId/admin'
})
@Component({
    templateUrl: './event-admin.page.html'
})
export class EventAdminPage {

    statistic: Statistic = <Statistic>{};
    presentations: Presentation[] = [];
    selectedEvent: Event;

    constructor(private modalCtrl: ModalController,
                private navParams: NavParams,
                private statsService: StatsService,
                private eventService: EventService,
                private presentationService: PresentationService) {
        const eventId = this.navParams.data.eventId;
        this.eventService.fetchEventById(eventId).subscribe(event => this.selectedEvent = event);
        this.statsService.getEventStats(eventId).subscribe(statistic => this.statistic = statistic);
        this.presentationService
            .fetchAllPresentationFromAnEvent(eventId)
            .subscribe(presentations => this.presentations = presentations);
    }

    public displayPresentationModal() {
        const presentationModal = this.modalCtrl.create(PresentationModalComponent, { userId: 987651 });
        presentationModal.present();
    }
}