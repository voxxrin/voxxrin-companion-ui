import { AttachContentModalComponent } from './../../components/attach-content-modal/attach-content-modal.component';
import { ConstantsService } from '../../services/constants.service';
import { PresentationService } from '../../services/presentation.service';
import { Presentation } from '../../models/presentation.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PresentationAdminPage } from '../presentation-admin/presentation-admin.page';

@IonicPage()
@Component({
    templateUrl: 'event-presentations-admin.page.html',
})
export class EventPresentationsAdminPage {

    presentations: Presentation[] = [];
    eventId: string;

    constructor(public navParams: NavParams,
                private navController: NavController,
                private presentationService: PresentationService,
                public constants: ConstantsService) {
        this.eventId = this.navParams.data;
    }

    public goToPresentationAdmin(presentation: Presentation) {
        this.navController.push(PresentationAdminPage, {presentation: presentation});
    }

    ionViewDidLoad() {
        this.presentationService
            .fetchAllPresentationFromAnEvent(this.eventId)
            .subscribe(presentations => this.presentations = presentations);
    }
}
