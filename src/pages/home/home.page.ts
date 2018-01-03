import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IonicPage } from 'ionic-angular';

@IonicPage({
    segment: ''
})
@Component({
    templateUrl: './home.page.html'
})
export class HomePage {

    constructor(private authService: AuthService) {
        this.authService.currentUser().subscribe(user => console.log('connected user : ', user));
    }
}
