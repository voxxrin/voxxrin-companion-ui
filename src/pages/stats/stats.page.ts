import { Presentation } from './../../models/presentation.model';
import { PresentationService } from './../../services/presentation.service';
import { Statistic } from './../../models/stats.model';
import { Component } from '@angular/core';
import { StatsService } from '../../services/stats.service';

@Component({
    selector: 'page-stats',
    templateUrl: './stats.page.html'
})
export class StatsPage {

    statistic: Statistic;
    presentations: Presentation[];

    constructor(private statsService: StatsService, private presentationService: PresentationService) {
        this.statsService.getStatFromPresentation().subscribe(statistic => this.statistic = statistic);
        this.presentationService.getAllPresentation().subscribe(presentations => this.presentations = presentations);
    }
}