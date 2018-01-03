import { App } from 'ionic-angular';
import { Component, Input } from '@angular/core';
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

    public goToHome(): void {
        this.app.getActiveNav().push('HomePage');
    }

    public goToEvents(): void {
        this.app.getActiveNav().push('EventsPage');
    }
}
