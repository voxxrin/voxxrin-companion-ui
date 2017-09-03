import { Statistic } from './../../models/stats.model';
import { StatsService } from './../../services/stats.service';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'stats',
  templateUrl: 'stats.component.html',
})
export class StatsComponent {

    @Input() statistic: Statistic;

    constructor(private statsService: StatsService) {
    }
}
