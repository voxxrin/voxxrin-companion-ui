import { EventsPage } from './../../../pages/events/events.page';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'auth-actions',
    templateUrl: './auth-actions.component.html',
})
export class AuthActionsComponent {

    constructor(public navCtrl: NavController) { }

    goToEvents(): void {
        this.navCtrl.push(EventsPage);
    }
}