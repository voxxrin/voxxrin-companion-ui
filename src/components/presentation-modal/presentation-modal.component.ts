import { PresentationService } from './../../services/presentation.service';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'presentation-modal',
    templateUrl: 'presentation-modal.component.html'
})
export class PresentationModalComponent {

    url: string;
    description: string;
    userId: string;
    mimeType: string;
    presentationId: string;

    constructor(private viewCtrl: ViewController, private params: NavParams, private presentationService: PresentationService) {
        this.presentationId = params.get('presentationId');
    }

    uploadContent() {
        let attachedContent = {
            url: this.url, 
            description: this.description,
            userId: this.userId,
            mimeType: this.mimeType
        };
        this.presentationService.setUrlContentToAPresentation(attachedContent).subscribe();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}