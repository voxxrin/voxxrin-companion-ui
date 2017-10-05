import { Statistic } from '../../models/stats.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'stats',
  templateUrl: 'stats.component.html',
})
export class StatsComponent {

    @Input() statistic: Statistic;

    constructor() { }
}
