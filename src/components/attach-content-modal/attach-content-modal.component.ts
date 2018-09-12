import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'attach-content-modal',
    templateUrl: 'attach-content-modal.component.html'
})
export class AttachContentModalComponent {

    myParam: string;

    constructor(private viewCtrl: ViewController, private params: NavParams) {
        this.myParam = params.get('userId');
        console.log(this.myParam);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}