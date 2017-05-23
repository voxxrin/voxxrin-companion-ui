import { EventsPage } from './../events/events.page';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.page.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) { }

    goToEvents(): void {
        this.navCtrl.push(EventsPage);
    }
}
