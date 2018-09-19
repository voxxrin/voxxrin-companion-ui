import { LoadingController, Loading } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

    constructor(private loadingCtrl: LoadingController) { }

    private loading: Loading;

    public launchLoader(): Promise<Loading> {
        this.loading = this.loadingCtrl.create({});
        return this.loading.present();
    }

    public stopLoader(): void {
        this.loading.dismiss();
    }
}