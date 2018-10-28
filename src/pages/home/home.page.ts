import { ConnectivityService } from './../../services/connectivity.service';
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

    constructor(authService: AuthService, private modalCtrl: ModalController, private connectivityService: ConnectivityService) {
        super(authService);
        console.log('connected user : ', this.authenticatedUser);
        console.log('CONNECTION UP : ', connectivityService.getConnectivity());
    }

    public openEnvSwitcher(): void {
        const modal = this.modalCtrl.create(EnvironmentSwitcherModalComponent);
        modal.present();
    }
}
