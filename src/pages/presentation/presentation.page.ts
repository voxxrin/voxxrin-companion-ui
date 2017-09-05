import { App, NavParams } from 'ionic-angular';
import { Presentation } from './../../models/presentation.model';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './presentation.page.html'
})
export class PresentationPage implements OnInit {

    public presentations: Presentation[];

    constructor(private app: App, private navParams: NavParams) { }

    ngOnInit(): void {
        
        //throw new Error("Method not implemented.");
    }
}