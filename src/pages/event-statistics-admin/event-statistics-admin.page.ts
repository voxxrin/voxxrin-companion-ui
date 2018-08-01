import { Statistic } from './../../models/stats.model';
import { StatsService } from './../../services/stats.service';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    templateUrl: 'event-statistics-admin.page.html',
})
export class EventStatisticsAdminPage {

    statistic: Statistic = <Statistic>{};
    eventId: string;

    constructor(public navParams: NavParams, private statsService: StatsService) {
        this.eventId = this.navParams.data;
    }

    ionViewDidLoad() {
        this.statsService.getEventStats(this.eventId).subscribe(statistic => this.statistic = statistic);
    }
}
