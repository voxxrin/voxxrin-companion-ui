import { Component } from '@angular/core';
import { IonicPage, NavParams, ToastController } from 'ionic-angular';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@IonicPage()
@Component({
    templateUrl: 'event-data-admin.page.html',
})
export class EventDataAdminPage {

    public event: Event;

    constructor(private navParams: NavParams, private eventService: EventService, private toastCtrl: ToastController) {
        this.event = this.navParams.data;
    }

    public updateEventData() {
        this.eventService.updateData(this.event).subscribe(event => {
            this.toastCtrl
                .create({
                    message: 'Mise à jour, effectuée avec succès',
                    duration: 3000,
                    position: 'top'
                })
                .present();
        });
    }

    public isValid(): boolean {
        return this.checkUrl(this.event.links.websiteUrl)
            && this.checkUrl(this.event.links.twitterProfileUrl)
            && this.checkUrl(this.event.links.facebookProfileUrl);
    }

    private checkUrl(url: string): boolean {
        return !url || url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0;
    }
}
