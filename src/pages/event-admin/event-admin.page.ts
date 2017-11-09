import { PresentationModalComponent } from './../../components/presentation-modal/presentation-modal.component';
import { Event } from '../../models/event.model';
import { ModalController, NavParams } from 'ionic-angular';
import { Presentation } from '../../models/presentation.model';
import { PresentationService } from '../../services/presentation.service';
import { Statistic } from '../../models/stats.model';
import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import { ConstantsService } from './../../services/constants.service';

@Component({
    selector: 'event-admin',
    templateUrl: './event-admin.page.html'
})
export class EventAdminPage implements OnInit{

    statistic: Statistic = <Statistic>{};
    presentations: Presentation[] = [];
    selectedEvent: Event;

    constructor(private modalCtrl: ModalController, private navParams: NavParams, private statsService: StatsService, private presentationService: PresentationService, private constants: ConstantsService) {

        //Getting the selected event
        this.selectedEvent = navParams.get('selectedEvent');

        //Getting associated statistic of the selected event
        this.statsService.getStatFromPresentation(this.selectedEvent).subscribe(statistic => this.statistic = statistic);

        //Getting the presentation list of the selected event
        this.presentationService.getAllPresentationFromAnEvent(this.selectedEvent).subscribe(presentations => {
            this.presentations = this.presentations.concat(presentations);
        });
    }

    public ngOnInit(): void {
    }

    displayPresentationModal(presentationId) {
        const presentationModal = this.modalCtrl.create(PresentationModalComponent, {presentationId : presentationId});
        presentationModal.present();
    }
}