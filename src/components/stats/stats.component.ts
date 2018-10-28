import { Statistic } from '../../models/stats.model';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';
import { RatingItem } from '../../models/rating-item.model';
import { RatingService } from '../../services/rating.service';
import { Presentation } from '../../models/presentation.model';

@Component({
    selector: 'stats',
    templateUrl: 'stats.component.html',
})
export class StatsComponent implements OnChanges {

    @Input() statistic: Statistic;

    public bingoResults: { ratingItem: RatingItem, presentation: Presentation; }[];

    constructor(private ratingService: RatingService) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['statistic'] && changes['statistic'].currentValue) {
            this.ratingService
                .fetchAllItems()
                .map(items => _.keyBy(items, item => item.key))
                .subscribe(ratingItems => this.bingoResults = this.computeBingoResults(ratingItems));
        }
    }

    public computeBingoResults(ratingItems: { [key: string]: RatingItem }): { ratingItem: RatingItem, presentation: Presentation }[] {
        if (this.statistic && this.statistic.topRatings) {
            return _.keys(this.statistic.topRatings).map(key => {
                return {ratingItem: ratingItems[key], presentation: this.statistic.topRatings[key]};
            });
        }
    }
}
