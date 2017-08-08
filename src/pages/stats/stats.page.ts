import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service'; 
import { Statistic } from "../../models/stats.model";

@Component({
    selector: 'page-stats',
    templateUrl: './stats.page.html'
})
export class StatsPage implements OnInit {
    
    statistic: Statistic;

    constructor(private statsService: StatsService) {}

    ngOnInit(): void {
        this.statsService.fecthStats().subscribe(statistic => {
            this.statistic = statistic;
        })
    }
}
