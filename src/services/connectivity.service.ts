import { OAuthProvider } from './auth.service';
import { ToastController, Platform } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';

@Injectable()
export class ConnectivityService {

    private static isConnected: boolean;

    constructor(private network: Network, private toastCtrl: ToastController, private platform: Platform) {
        // TODO: see if that can be done elsewhere (ngOnInit ?)
        this.network.onConnect().subscribe(() => {
            let toast = this.toastCtrl.create({
                message: 'Connecté au réseau',
                duration: 3000,
                position: 'top'
            });

            toast.present();
        });
        this.network.onDisconnect().subscribe(() => {
            let toast = this.toastCtrl.create({
                message: 'Déconnecté du réseau',
                duration: 3000,
                position: 'top'
            });
            
            toast.present();
        });
    }

    public getConnectivity(): boolean {
        if(this.platform.is('cordova')) {
            return this.network.type !== this.network.Connection.NONE;
        }
        return navigator.onLine;

    }
}