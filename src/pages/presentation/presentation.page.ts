import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Presentation } from '../../models/presentation.model';
import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';
import { BingoRatingModalComponent } from '../../components/bingo-rating-modal/bingo-rating-modal.component';
import { AuthService } from '../../services/auth.service';
import { AbstractAuthenticatedComponent } from '../../components/abstract-authenticated-component';
import { RatingService } from '../../services/rating.service';
import { PushService } from '../../services/push.service';

@IonicPage({
    segment: 'presentation/:presentationId'
})
@Component({
    selector: 'presentation-page',
    templateUrl: './presentation.page.html'
})
export class PresentationPage extends AbstractAuthenticatedComponent implements OnInit {

    public presentation: Presentation;
    public presentations: Presentation[];

    constructor(private navController: NavController,
                private navParams: NavParams,
                private modalCtrl: ModalController,
                private presentationService: PresentationService,
                private ratingService: RatingService,
                private pushService: PushService,
                authService: AuthService) {
        super(authService)
    }

    ngOnInit(): void {
        this.presentations = this.navParams.data.presentations;
        this.loadPresentation(this.navParams.data.presentationId);
    }

    public swipePresentation(swipeEvent: any) {
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
        attachContentModal.onDidDismiss(subscription => {
            if (subscription) {
                this.loadPresentation(this.navParams.data.presentationId);
            }
        });
    }

    public bookmark(presentation: Presentation) {
        const deviceToken = this.pushService.getToken();
        let bookmarkFunction = (id) => presentation.favorite
            ? this.presentationService.removePresentationBookmark(id, deviceToken)
            : this.presentationService.bookmarkPresentation(id, deviceToken);
        bookmarkFunction(presentation._id)
            .subscribe(s => this.loadPresentation(presentation._id));
    }

    public subscribeToContent(presentation: Presentation) {
        const deviceToken = this.pushService.getToken();
        let contentSubscriptionFunction = (id) => presentation.reminded
            ? this.presentationService.unsubscribeFromPresentationContent(id, deviceToken)
            : this.presentationService.subscribeToPresentationContent(id, deviceToken);
        contentSubscriptionFunction(presentation._id)
            .subscribe(s => this.loadPresentation(presentation._id));
    }

    private loadPresentation(id: string) {
        this.presentationService
            .fetchPresentationById(id)
            .map(presentation => {
                this.ratingService
                    .fetchPresentationRatings(presentation)
                    .filter(subs => subs.length > 0)
                    .subscribe(rating => presentation.rated = true);
                return presentation;
            })
            .subscribe(presentation => this.presentation = presentation);
    }
}