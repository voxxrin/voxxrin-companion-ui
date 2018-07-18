import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { RatingItem } from '../../models/rating-item.model';
import { RatingService } from '../../services/rating.service';
import { Presentation } from '../../models/presentation.model';

@Component({
    selector: 'bingo-rating-modal',
    templateUrl: 'bingo-rating-modal.component.html'
})
export class BingoRatingModalComponent implements OnInit {

    public items: RatingItem[];
    public selectedItems: RatingItem[];
    private presentation: Presentation;

    constructor(private viewCtrl: ViewController, private ratingService: RatingService, private params: NavParams) { }

    ngOnInit(): void {
        this.presentation = this.params.get('presentation');
        this.ratingService.fetchAllItems().subscribe(items => {
            this.ratingService.fetchPresentationRatings(this.presentation).subscribe(pickedItems => {
                this.items = items.map(item => {
                    item.picked = pickedItems.findIndex(pickedItem => pickedItem.key === item.key) >= 0;
                    return item;
                });
            });
        });
    }

    public submit(): void {
        this.ratingService.rate(this.presentation, this.selectedItems).subscribe(prez => this.dismiss(prez));
    }

    public dismiss(data?: Presentation): void {
        this.viewCtrl.dismiss(data);
    }
}