import { NavController } from 'ionic-angular';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { EventsPage } from '../../pages/events/events.page';

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

    @Input() content: any;

    constructor(private navCtrl: NavController) {

    }

    goToEventsList(): void{
        this.navCtrl.push(EventsPage);
    }
}