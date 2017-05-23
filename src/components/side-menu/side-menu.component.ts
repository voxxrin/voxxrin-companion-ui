import { App } from 'ionic-angular';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { EventsPage } from '../../pages/events/events.page';

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

    @Input() content: any;

    constructor(private app: App) {

    }

    goToEventsList(): void{
        this.app.getActiveNav().push(EventsPage);
    }
}
