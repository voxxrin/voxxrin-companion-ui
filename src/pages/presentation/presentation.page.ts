import { NavParams, App } from 'ionic-angular';
import { Presentation } from '../../models/presentation.model';
import { Component } from '@angular/core';

@Component({
    templateUrl: './presentation.page.html'
})
export class PresentationPage {

    public presentation: Presentation;

    constructor(private app: App, private navParams: NavParams) { }

    ngOnInit(): void {
        this.presentation = this.navParams.data.presentation;
    }
}