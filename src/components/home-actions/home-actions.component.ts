import { App, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AbstractAuthenticatedComponent } from '../abstract-authenticated-component';

@Component({
    selector: 'home-actions',
    templateUrl: './home-actions.component.html',
})
export class HomeActionsComponent extends AbstractAuthenticatedComponent {

    constructor(public navController: NavController, private app: App, private authService: AuthService) {
        super(authService);
    }

    public goToEvents(): void {
        this.navController.push('EventsPage');
    }

    public auth(provider): void {
        this.authService.auth(provider);
    }

    public logout() {
        this.authService.logout();
    }

    public goToFavorites(): void {
        this.app.getActiveNav().push('FavoritesPage');
    }
}