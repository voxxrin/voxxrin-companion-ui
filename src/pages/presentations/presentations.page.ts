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

    private presentations: Presentation[] = [];

    public filteredPresentations: Presentation[] = [];
    public day: Day;
    public presentationsFilter: string = "allPresentations";

    constructor(private navController: NavController,
                private navParams: NavParams,
                private dayService: DayService,
                private presentationService: PresentationService,
                public constants: ConstantsService) {
    }

    ngOnInit() {
        this.dayService.fetchDayById(this.navParams.data.dayId).subscribe(day => {
            this.day = day;
            this.presentationService
                .fetchPresentations(this.day)
                .subscribe(presentations => 
                {
                    presentations.forEach(prez => this.filteredPresentations.push(prez))
                    this.presentations = presentations;
                });
        });
    }

    public navigateToPresentation(presentation: Presentation): void {
        const params = { presentationId: presentation._id, presentations: this.filteredPresentations };
        this.navController.push('PresentationPage', params, { animate: true, direction: 'forward' })
    }

    public filterChanged(filterSelected: string){
        if(filterSelected === "favoritePresentations"){
            const filteredPresentations = this.filteredPresentations.filter(pres => pres.favorite);                
            this.filteredPresentations.splice(0, this.filteredPresentations.length);
            filteredPresentations.forEach((pres) => this.filteredPresentations.push(pres));
        } else if(filterSelected == "allPresentations") {
            this.filteredPresentations.splice(0, this.filteredPresentations.length);
            this.presentations.forEach(pres => this.filteredPresentations.push(pres));
        }
    }
}
