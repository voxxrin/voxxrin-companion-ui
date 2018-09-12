import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { AbstractAuthenticatedComponent } from '../../components/abstract-authenticated-component';
import { AuthService } from '../../services/auth.service';
import { Presentation } from '../../models/presentation.model';
import { AttachedContent } from '../../models/attached-content.model';
import { PresentationService } from '../../services/presentation.service';

@IonicPage({
    segment: 'presentation'
})
@Component({
    selector: 'presentation-admin-page',
    templateUrl: './presentation-admin.page.html'
})
export class PresentationAdminPage extends AbstractAuthenticatedComponent {

    public presentation: Presentation;
    public submitFormOpened: boolean;

    constructor(authService: AuthService,
                params: NavParams,
                private navCtrl: NavController,
                private presentationService: PresentationService) {
        super(authService);
        this.presentation = params.get('presentation');
    }

    public dismiss(): void {
        this.navCtrl.pop();
    }

    public toggleAttachedContentSubmit() {
        this.submitFormOpened = !this.submitFormOpened;
    }

    public submitContent(attachedContent: AttachedContent) {
        this.toggleAttachedContentSubmit();
        this.presentationService.attachContent(this.presentation._id, attachedContent)
            .subscribe((content: AttachedContent) => this.presentation.releasedContents = (this.presentation.releasedContents || []).concat(content));
    }
}