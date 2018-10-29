import { LoadingService } from '../../services/loading.service';
import { PresentationService } from '../../services/presentation.service';
import { Day } from '../../models/day.model';
import { IonicPage, NavController, NavParams, Loading } from 'ionic-angular';
import { Presentation } from '../../models/presentation.model';
import { Component } from '@angular/core';
import { ConstantsService } from '../../services/constants.service';
import { DayService } from '../../services/day.service';
import { AuthService } from '../../services/auth.service';
import { AbstractAuthenticatedComponent } from '../../components/abstract-authenticated-component';

@IonicPage({
    segment: 'event/:eventId/day/:dayId/presentations'
})
@Component({
    templateUrl: './presentations.page.html'
})
export class PresentationsPage extends AbstractAuthenticatedComponent {

    public static presentationHasChanged: boolean = false;

    public presentations: Presentation[] = [];
    public filteredPresentations: Presentation[] = [];

    public day: Day;
    public presentationsFilter: 'allPresentations' | 'favoritePresentations' = 'allPresentations';

    constructor(private navController: NavController,
                private navParams: NavParams,
                private dayService: DayService,
                private presentationService: PresentationService,
                public constants: ConstantsService,
                public authService: AuthService,
                private loadingService: LoadingService) {
        super(authService);
        authService.currentUser()
            .filter(u => u === undefined || u === null)
            .subscribe(u => this.presentationsFilter = 'allPresentations');
    }

    ionViewDidLoad() {
        // let loading: Loading = this.loadingService.launchLoader();
        // loading.present().then(() => {
            this.dayService.fetchDayById(this.navParams.data.dayId).subscribe(day => {
                this.day = day;
                this.presentationService
                    .fetchPresentations(this.day)
                    .subscribe(presentations => {
                        this.presentations = presentations;
                        this.filteredPresentations = presentations.filter(pres => pres.favorite);
                        // loading.dismiss();
                    });
            });
        // });
    }

    ionViewWillEnter() {
        if (PresentationsPage.presentationHasChanged) {
            PresentationsPage.presentationHasChanged = false;
            this.ionViewDidLoad();
        }
    }

    public navigateToPresentation(presentation: Presentation, presentations: Presentation[]): void {
        const params = { presentationId: presentation._id, presentations: presentations };
        this.navController.push('PresentationPage', params, { animate: true, direction: 'forward' })
    }
}