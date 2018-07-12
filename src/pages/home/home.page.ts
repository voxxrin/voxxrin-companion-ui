import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IonicPage } from 'ionic-angular';
import { AbstractAuthenticatedComponent } from '../../components/abstract-authenticated-component';

@IonicPage({
    segment: ''
})
@Component({
    templateUrl: './home.page.html'
})
export class HomePage extends AbstractAuthenticatedComponent{

    constructor(authService: AuthService) {
        super(authService);
        console.log('connected user : ', this.authenticatedUser);
    }
}
