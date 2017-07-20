import { EventsPage } from '../../../pages/events/events.page';
import { App } from 'ionic-angular';
import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
    selector: 'auth-actions',
    templateUrl: './auth-actions.component.html',
})
export class AuthActionsComponent {

    private authenticatedUser: User;

    constructor(public app: App, private authService: AuthService) {
        this.authService.currentUser().subscribe(user => this.authenticatedUser = user);
    }

    goToEvents(): void {
        this.app.getRootNav().push(EventsPage);
    }

    linkedinAuth(): void {
        this.authService.auth('linkedin');
    }

    twitterAuth(): void {
        this.authService.auth('twitter');
    }

    logout() {
        this.authService.logout();
    }
}