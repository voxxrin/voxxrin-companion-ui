import { EventsPage } from './../../../pages/events/events.page';
import { App, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'auth-actions',
    templateUrl: './auth-actions.component.html',
})
export class AuthActionsComponent {

    constructor(public app: App, private authService: AuthService) { }

    goToEvents(): void {
        this.app.getRootNav().push(EventsPage);
    }

    linkedinAuth(): void {
        this.authService.auth('linkedin');
    }

    twitterAuth(): void {
        this.authService.auth('twitter');
    }
}