import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IonicPage, ModalController } from 'ionic-angular';
import { AbstractAuthenticatedComponent } from '../../components/abstract-authenticated-component';
import { EnvironmentSwitcherModalComponent } from '../../components/environment-switcher-modal/environment-switcher-modal.component';

@IonicPage({
    segment: ''
})
@Component({
    templateUrl: './home.page.html'
})
export class HomePage extends AbstractAuthenticatedComponent {

    constructor(authService: AuthService, private modalCtrl: ModalController) {
        super(authService);
        console.log('connected user : ', this.authenticatedUser);
    }

    public openEnvSwitcher(): void {
        const modal = this.modalCtrl.create(EnvironmentSwitcherModalComponent);
        modal.present();
    }
}
