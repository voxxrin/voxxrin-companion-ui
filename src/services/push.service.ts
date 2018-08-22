import { Injectable } from '@angular/core';

declare const window;

@Injectable()
export class PushService {

    private static token: string;

    public setup(): void {
        if (window.cordova && window.FirebasePlugin) {
            window.FirebasePlugin.grantPermission();
            window.FirebasePlugin.onTokenRefresh(token => {
                    PushService.token = token;
                    console.log('firebase token', token);
                }, error => {
                    console.error('error when fetching firebase token', error);
                }
            );
        }
    }

    public getToken(): string {
        return PushService.token;
    }
}