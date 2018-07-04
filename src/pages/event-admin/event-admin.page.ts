import { AdminPresentationsPage } from './../admin-presentations/admin-presentations';
import { AdminStatisticsPage } from './../admin-statistics/admin-statistics';
import { AdminEventDataPage } from './../admin-event-data/admin-event-data';
import { IonicPage, ModalController, NavParams, MenuController } from 'ionic-angular';
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

    selectedEvent: Event;
    componentShown: any = 'data';

    eventId: string;

    dataPage = AdminEventDataPage;
    statPage = AdminStatisticsPage;
    presPage = AdminPresentationsPage;

    constructor(public constants: ConstantsService,
        private modalCtrl: ModalController,
        private navParams: NavParams,
        private statsService: StatsService,
        private eventService: EventService,
        private presentationService: PresentationService,
        private menuCtrl: MenuController) {
        this.eventId = this.navParams.data.eventId;
        this.eventService.fetchEventById(this.eventId).subscribe(event => this.selectedEvent = event);
    }

    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }

    ionViewDidLeave() {
        this.menuCtrl.enable(true);
    }
}