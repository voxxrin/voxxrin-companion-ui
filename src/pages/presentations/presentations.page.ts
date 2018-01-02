import { PresentationService } from '../../services/presentation.service';
import { Day } from '../../models/day.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Presentation } from '../../models/presentation.model';
import { Component, OnInit } from '@angular/core';
import { PresentationPage } from '../presentation/presentation.page';
import { ConstantsService } from '../../services/constants.service';

@IonicPage({
    segment: 'presentations'
})
@Component({
    templateUrl: './presentations.page.html'
})
export class PresentationsPage implements OnInit {

    public presentations: Presentation[] = [];
    private day: Day;

    constructor(private navController: NavController,
                private navParams: NavParams,
                private presentationService: PresentationService,
                public constants: ConstantsService) {
    }

    ngOnInit() {
        this.day = this.navParams.data.day;
        this.presentationService.fetchPresentations(this.day).subscribe(presentations => this.presentations = presentations);
    }

    public navigateToPresentation(presentation: Presentation): void {
        const params = { presentationId: presentation._id, presentations: this.presentations };
        this.navController.push('PresentationPage', params, { animate: true, direction: 'forward' })
    }
}
