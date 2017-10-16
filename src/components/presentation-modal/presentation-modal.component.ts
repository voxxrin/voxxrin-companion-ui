import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'presentation-modal',
    templateUrl: 'presentation-modal.component.html'
})
export class PresentationModalComponent {
    
    myParam: string;

    constructor(private viewCtrl: ViewController, private params: NavParams) {
            this.myParam = params.get('userId');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}