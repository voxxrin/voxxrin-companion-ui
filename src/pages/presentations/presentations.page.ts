import { PresentationService } from '../../services/presentation.service';
import { Day } from '../../models/day.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Presentation } from '../../models/presentation.model';
import { Component } from '@angular/core';
import { ConstantsService } from '../../services/constants.service';
import { DayService } from '../../services/day.service';

@IonicPage({
    segment: 'event/:eventId/day/:dayId/presentations'
})
@Component({
    templateUrl: './presentations.page.html'
})
export class PresentationsPage {

    public presentations: Presentation[] = [];
    public filteredPresentations: Presentation[] = [];

    public day: Day;
    public presentationsFilter: string = "allPresentations";

    constructor(private navController: NavController,
                private navParams: NavParams,
                private dayService: DayService,
                private presentationService: PresentationService,
                public constants: ConstantsService) {
    }

    ionViewDidEnter(){
        this.dayService.fetchDayById(this.navParams.data.dayId).subscribe(day => {
            this.day = day;
            this.presentationService
                .fetchPresentations(this.day)
                .subscribe(presentations => {
                    this.presentations = presentations;
                    this.filteredPresentations = presentations.filter(pres => pres.favorite);
                });
        });
    }

    public navigateToPresentation(presentation: Presentation): void {
        const params = { presentationId: presentation._id, presentations: this.filteredPresentations };
        this.navController.push('PresentationPage', params, { animate: true, direction: 'forward' })
    }
}