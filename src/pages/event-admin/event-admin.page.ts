import { IonicPage, ModalController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { PresentationModalComponent } from '../../components/presentation-modal/presentation-modal.component';
import { Event } from '../../models/event.model';
import { Presentation } from '../../models/presentation.model';
import { PresentationService } from '../../services/presentation.service';
import { Statistic } from '../../models/stats.model';
import { StatsService } from '../../services/stats.service';

@IonicPage({
    segment: 'admin'
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
                private presentationService: PresentationService) {
        this.selectedEvent = navParams.get('selectedEvent');
        this.statsService.getStatFromPresentation(this.selectedEvent).subscribe(statistic => this.statistic = statistic);
        this.presentationService.getAllPresentationFromAnEvent(this.selectedEvent).subscribe(presentations => {
            this.presentations = this.presentations.concat(presentations);
        });
    }

    public displayPresentationModal() {
        const presentationModal = this.modalCtrl.create(PresentationModalComponent, { userId: 987651 });
        presentationModal.present();
    }
}