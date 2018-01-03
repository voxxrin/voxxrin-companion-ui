import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Presentation } from '../../models/presentation.model';
import { Component } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';

@IonicPage({
    segment: 'presentation/:presentationId'
})
@Component({
    templateUrl: './presentation.page.html'
})
export class PresentationPage {

    public presentation: Presentation;
    public presentations: Presentation[];

    constructor(private navController: NavController, private navParams: NavParams, private presentationService: PresentationService) { }

    ngOnInit(): void {
        this.presentations = this.navParams.data.presentations;
        this.presentationService.fetchPresentationById(this.navParams.data.presentationId).subscribe(presentation => this.presentation = presentation);
    }

    public loadPresentation(event) {
        const prezIndex = this.presentations.findIndex(prez => prez === this.presentation);
        if (event.direction === 2 && prezIndex > 0) {
            this.navigateToPrez(prezIndex - 1);
        } else if (event.direction === 4 && prezIndex < this.presentations.length) {
            this.navigateToPrez(prezIndex + 1);
        }
    }

    private navigateToPrez(index: number) {
        const presentation = this.presentations[index];
        const params = { presentationId: presentation._id, presentation: presentation, presentations: this.presentations };
        this.navController.pop({ animate: false });
        this.navController.push('PresentationPage', params, { animate: false });
    }
}