import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Presentation } from '../../models/presentation.model';
import { Component } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';
import { BingoRatingModalComponent } from '../../components/bingo-rating-modal/bingo-rating-modal.component';

@IonicPage({
    segment: 'presentation/:presentationId'
})
@Component({
    templateUrl: './presentation.page.html'
})
export class PresentationPage {

    public presentation: Presentation;
    public presentations: Presentation[];

    constructor(private navController: NavController,
                private navParams: NavParams,
                private modalCtrl: ModalController,
                private presentationService: PresentationService) {
    }

    ngOnInit(): void {
        this.presentations = this.navParams.data.presentations;
        this.presentationService.fetchPresentationById(this.navParams.data.presentationId).subscribe(presentation => this.presentation = presentation);
    }

    public loadPresentation(swipeEvent: any) {
        if (this.presentations) {
            const prezIndex = this.presentations.findIndex(prez => prez._id === this.presentation._id);
            if (swipeEvent.direction === 4 && prezIndex > 0) {
                this.navigateToPrez(prezIndex - 1);
            } else if (swipeEvent.direction === 2 && prezIndex < this.presentations.length) {
                this.navigateToPrez(prezIndex + 1);
            }
        }
    }

    private navigateToPrez(index: number) {
        const presentation = this.presentations[index];
        const params = {
            presentationId: presentation._id,
            presentation: presentation,
            presentations: this.presentations
        };
        this.navController.pop({animate: false});
        this.navController.push('PresentationPage', params, {animate: false});
    }

    public rate(presentation: Presentation) {
        const attachContentModal = this.modalCtrl.create(BingoRatingModalComponent, {presentation: presentation});
        attachContentModal.present();
    }
}