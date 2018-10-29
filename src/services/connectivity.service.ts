import { Platform, ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';

@Injectable()
export class ConnectivityService {

    private isConnected: boolean = true;

    constructor(private network: Network, private toastCtrl: ToastController, private platform: Platform) {}

    public init() {
        this.network.onConnect().subscribe(() => {
            if (!this.isConnected) {
                let toast = this.toastCtrl.create({
                    message: 'Connecté au réseau',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                this.isConnected = true;
            }
        });
        this.network.onDisconnect().subscribe(() => {
            if (this.isConnected) {
                let toast = this.toastCtrl.create({
                    message: 'Déconnecté du réseau',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                this.isConnected = false;
            }
        });
    }

    public isOnline(): boolean {
        if (this.platform.is('cordova')) {
            return this.network.type !== this.network.Connection.NONE;
        }
        return navigator.onLine;
    }
}