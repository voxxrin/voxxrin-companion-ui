import { Component, Input } from '@angular/core';
import { Presentation } from '../../models/presentation.model';
import { ConstantsService } from '../../services/constants.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
    selector: 'presentation',
    templateUrl: './presentation.component.html'
})
export class PresentationComponent {

    @Input() presentation: Presentation;

    constructor(public constants: ConstantsService, private iab: InAppBrowser) { }

    public openTwitterUrl(twitterId: string): void {
        const url = "https://twitter.com/" + twitterId.substr(1);
        this.iab.create(url, "_system");
    }
}
