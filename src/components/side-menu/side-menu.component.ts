import { App } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AbstractAuthenticatedComponent } from '../abstract-authenticated-component';

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html'
})
export class SideMenuComponent extends AbstractAuthenticatedComponent {

    @Input() content: any;

    constructor(private app: App, authService: AuthService) {
        super(authService);
    }

    public goToHome(): void {
        this.app.getActiveNav().push('HomePage');
    }

    public goToEvents(): void {
        this.app.getActiveNav().push('EventsPage');
    }
}
