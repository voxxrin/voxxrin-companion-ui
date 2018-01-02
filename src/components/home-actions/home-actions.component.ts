import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'home-actions',
    templateUrl: './home-actions.component.html',
})
export class HomeActionsComponent {

    private authenticatedUser: User;

    constructor(public navController: NavController, private authService: AuthService) {
        this.authService.currentUser().subscribe(user => this.authenticatedUser = user);
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
}