import { HomePage } from './../../pages/home/home.page';
import { EventsPage } from './../../pages/events/events.page';
import { App } from 'ionic-angular';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

    @Input() content: any;

    constructor(private app: App) {
    }

    goToHome(): void {
        this.app.getRootNav().push(HomePage);
    }

    goToEvents(): void {
        this.app.getRootNav().push(EventsPage);
    }
}
