import { TimeSlot } from './../../models/time-slot.model';
import { TimeSlotService } from './../../services/time-slot.service';
import { Event } from '../../models/event.model';
import { NavController, NavParams } from 'ionic-angular';
import { Presentation } from '../../models/presentation.model';
import { PresentationService } from '../../services/presentation.service';
import { Statistic } from '../../models/stats.model';
import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';

@Component({
    selector: 'event-admin',
    templateUrl: './event-admin.page.html'
})
export class EventAdminPage implements OnInit{

    statistic: Statistic;
    presentations: Presentation[] = [];
    selectedEvent: Event;
    timeSlots: TimeSlot[];

    constructor(private navCtrl: NavController, private navParams: NavParams, private statsService: StatsService, private presentationService: PresentationService,
        private timeSlot: TimeSlotService) {

        //Getting the selected event
        this.selectedEvent = navParams.get('selectedEvent');
    }

    public ngOnInit(): void {
        //Getting associated statistic of the selected event
        this.statsService.getStatFromPresentation(this.selectedEvent).subscribe(statistic => this.statistic = statistic);
        //Getting the presentation list of the selected event
        this.presentationService.getAllPresentationFromAnEvent(this.selectedEvent).subscribe(presentations => {
            //this.timeSlots =  this.timeSlot.convertPresentationsTimeSlots(presentations);     
            this.presentations = this.presentations.concat(presentations);
        });
    }
}