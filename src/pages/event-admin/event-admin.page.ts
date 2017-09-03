import { Presentation } from './../../models/presentation.model';
import { PresentationService } from './../../services/presentation.service';
import { Statistic } from './../../models/stats.model';
import { Component } from '@angular/core';
import { StatsService } from '../../services/stats.service';

@Component({
    selector: 'event-admin',
    templateUrl: './event-admin.page.html'
})
export class EventAdminPage {

    statistic: Statistic;
    presentations: Presentation[];

    constructor(private statsService: StatsService, private presentationService: PresentationService) {
        this.statsService.getStatFromPresentation().subscribe(statistic => this.statistic = statistic);
        this.presentationService.getAllPresentationFromAnEvent().subscribe(presentations => this.presentations = presentations);
    }
}