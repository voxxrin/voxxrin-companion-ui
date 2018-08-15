import { Injectable } from '@angular/core';

declare const window;

@Injectable()
export class PushService {

    public setup(): void {
        if (window.cordova && window.FirebasePlugin) {
            window.FirebasePlugin.getToken(function (token) {
                console.log('firebase token', token);
            }, function (error) {
                console.error('error when fetching firebase token', error);
            });
        }
    }
}