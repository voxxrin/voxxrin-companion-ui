import { LoadingController, Loading } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

    constructor(private loadingCtrl: LoadingController) { }

    public launchLoader(): Loading {
        return this.loadingCtrl.create({});
    }
}