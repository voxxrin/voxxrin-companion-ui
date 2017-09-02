import { Statistic } from './../../models/stats.model';
import { StatsService } from './../../services/stats.service';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'stat-item',
  templateUrl: 'stat-item.html',
})
export class StatItemPage {

    @Input() stat: Statistic;

    constructor(private statsService: StatsService) {
    }
}
