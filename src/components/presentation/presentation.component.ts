import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Presentation } from '../../models/presentation.model';
import { ConstantsService } from '../../services/constants.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AbstractAuthenticatedComponent } from '../abstract-authenticated-component';
import { AuthService } from '../../services/auth.service';
import * as moment from 'moment';

@Component({
    selector: 'presentation',
    templateUrl: './presentation.component.html'
})
export class PresentationComponent extends AbstractAuthenticatedComponent{

    @Input() presentation: Presentation;
    @Output() ratePresentation: EventEmitter<Presentation> = new EventEmitter<Presentation>();  

    constructor(public constants: ConstantsService, 
                private iab: InAppBrowser, 
                authService: AuthService) {
        super(authService);
    }

    public openTwitterUrl(twitterId: string): void {
        const url = `https://twitter.com/${twitterId.substr(1)}`;
        this.iab.create(url, '_system');
    }

    public presentationHasBegun(presentation: Presentation) {
        return presentation.from.isBefore(moment());
    }
}