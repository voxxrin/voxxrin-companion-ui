import { IonicPage, MenuController, ModalController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';
import { StatsService } from '../../services/stats.service';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { ConstantsService } from '../../services/constants.service';
import { EventDataAdminPage } from '../event-data-admin/event-data-admin.page';
import { EventStatisticsAdminPage } from '../event-statistics-admin/event-statistics-admin.page';
import { EventPresentationsAdminPage } from '../event-presentations-admin/event-presentations-admin.page';

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

    dataPage = EventDataAdminPage;
    statPage = EventStatisticsAdminPage;
    presPage = EventPresentationsAdminPage;

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