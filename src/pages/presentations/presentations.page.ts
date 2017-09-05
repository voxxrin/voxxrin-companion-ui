import { PresentationService } from './../../services/presentation.service';
import { Day } from './../../models/day.model';
import { App, NavParams } from 'ionic-angular';
import { Presentation } from './../../models/presentation.model';
import { Component, OnInit } from '@angular/core';
import { PresentationPage } from "../presentation/presentation.page";

@Component({
    templateUrl: './presentations.page.html'
})
export class PresentationsPage implements OnInit {

    public presentations: Presentation[];

    constructor(private app: App, private navParams: NavParams, private presentationService: PresentationService) { }

    ngOnInit() {
        let day: Day = this.navParams.data.day;
        this.presentationService.fetchPresentations(day)
                                .subscribe(presentations => this.presentations = presentations);
    }

    public navigateToPresentation(presentation: Presentation): void {
        this.app.getRootNav().push(PresentationPage, { presentation: presentation }, { animate: true, direction: 'forward' })
    }
}6
