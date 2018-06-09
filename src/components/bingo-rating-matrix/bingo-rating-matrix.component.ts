import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RatingItem } from '../../models/rating-item.model';
import * as _ from 'lodash';

@Component({
    selector: 'bingo-rating-matrix',
    templateUrl: 'bingo-rating-matrix.component.html',
})
export class BingoRatingMatrixComponent implements OnChanges {

    @Input() items: RatingItem[];
    @Output() itemsSelected = new EventEmitter<RatingItem[]>();

    public chunkedItems: RatingItem[][];

    ngOnChanges(changes: SimpleChanges): void {
        if (this.items) {
            this.chunkedItems = _.chunk(this.items, 3);
        }
    }

    public toggleItem(item: RatingItem): void {
        item.picked = !item.picked;
        this.itemsSelected.emit(this.items);
    }
}
