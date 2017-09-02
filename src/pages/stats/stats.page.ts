import { Statistic } from './../../models/stats.model';
import { Component } from '@angular/core';
import { StatsService } from '../../services/stats.service';

@Component({
    selector: 'page-stats',
    templateUrl: './stats.page.html'
})
export class StatsPage {

    stat: Statistic;

    constructor(private statsService: StatsService) {
        this.statsService.fecthStats().subscribe(statistic => this.stat = statistic);
    }
}