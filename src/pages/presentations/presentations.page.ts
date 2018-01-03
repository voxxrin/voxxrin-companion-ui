import { PresentationService } from '../../services/presentation.service';
import { Day } from '../../models/day.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Presentation } from '../../models/presentation.model';
import { Component, OnInit } from '@angular/core';
import { PresentationPage } from '../presentation/presentation.page';
import { ConstantsService } from '../../services/constants.service';
import { DayService } from '../../services/day.service';

@IonicPage({
    segment: 'event/:eventId/day/:dayId/presentations'
})
@Component({
    templateUrl: './presentations.page.html'
})
export class PresentationsPage implements OnInit {

    public presentations: Presentation[] = [];
    public day: Day;

    constructor(private navController: NavController,
                private navParams: NavParams,
                private dayService: DayService,
                private presentationService: PresentationService,
                public constants: ConstantsService) {
    }

    ngOnInit() {
        this.dayService.fetchDayById(this.navParams.data.dayId).subscribe(day => {
            this.day = day;
            this.presentationService.fetchPresentations(this.day).subscribe(presentations => this.presentations = presentations);
        });
    }

    public navigateToPresentation(presentation: Presentation): void {
        const params = { presentationId: presentation._id, presentations: this.presentations };
        this.navController.push('PresentationPage', params, { animate: true, direction: 'forward' })
    }
}
