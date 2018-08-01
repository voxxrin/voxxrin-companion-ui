import { AttachContentModalComponent } from './../../components/attach-content-modal/attach-content-modal.component';
import { ConstantsService } from './../../services/constants.service';
import { PresentationService } from './../../services/presentation.service';
import { Presentation } from './../../models/presentation.model';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-admin-presentations',
    templateUrl: 'admin-presentations.html',
})
export class AdminPresentationsPage {

    presentations: Presentation[] = [];
    eventId: string;

    constructor(public navParams: NavParams,
                private modalCtrl: ModalController,
                private presentationService: PresentationService,
                public constants: ConstantsService) {
        this.eventId = this.navParams.data;
    }

    public displayAttachContentModal() {
        const attachContentModal = this.modalCtrl.create(AttachContentModalComponent, {userId: 987651});
        attachContentModal.present();
    }

    ionViewDidLoad() {
        this.presentationService
            .fetchAllPresentationFromAnEvent(this.eventId)
            .subscribe(presentations => this.presentations = presentations);
    }
}
