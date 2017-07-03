import { EventsPage } from './../../../pages/events/events.page';
import { App, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'auth-actions',
    templateUrl: './auth-actions.component.html',
})
export class AuthActionsComponent {

    constructor(public app: App) { }

    goToEvents(): void {
        this.app.getRootNav().push(EventsPage);
    }
}