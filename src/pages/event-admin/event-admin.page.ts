import { IonicPage, ModalController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { Presentation } from '../../models/presentation.model';
import { PresentationService } from '../../services/presentation.service';
import { Statistic } from '../../models/stats.model';
import { StatsService } from '../../services/stats.service';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { ConstantsService } from '../../services/constants.service';
import { AttachContentModalComponent } from '../../components/attach-content-modal/attach-content-modal.component';

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
    componentShown: any = 'data';

    constructor(public constants: ConstantsService,
                private modalCtrl: ModalController,
                private navParams: NavParams,
                private statsService: StatsService,
                private eventService: EventService,
                private presentationService: PresentationService) {
        const eventId = this.navParams.data.eventId;
        this.eventService.fetchEventById(eventId).subscribe(event => this.selectedEvent = event);
        this.statsService.getEventStats(eventId).subscribe(statistic => this.statistic = statistic);
        this.presentationService
            .fetchAllPresentationFromAnEvent(eventId)
            .subscribe(presentations => presentations.forEach(prez => this.presentations.push(prez)));
    }

    public displayAttachContentModal() {
        const attachContentModal = this.modalCtrl.create(AttachContentModalComponent, { userId: 987651 });
        attachContentModal.present();
    }

    public toggleComponent(component) {
        if (this.isComponentShown(component)) {
            this.componentShown = null;
        } else {
            this.componentShown = component;
        }
    }

    public isComponentShown (component) {
        return this.componentShown === component;
    }
}