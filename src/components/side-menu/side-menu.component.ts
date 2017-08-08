import { HomePage } from './../../pages/home/home.page';
import { EventsPage } from './../../pages/events/events.page';
import { StatsPage } from './../../pages/stats/stats.page';
import { App } from 'ionic-angular';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

    @Input() content: any;
    user: User;

    constructor(private app: App, private authService: AuthService) {
        this.authService.currentUser().subscribe(user => this.user = user);
    }

    goToHome(): void {
        this.app.getRootNav().push(HomePage);
    }

    goToEvents(): void {
        this.app.getRootNav().push(EventsPage);
    }

    goToStats(): void {
        this.app.getRootNav().push(StatsPage);
    }
}
