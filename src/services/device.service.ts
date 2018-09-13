import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {

    constructor(private platform: Platform) {}

    isAndroid() : boolean {
        return this.platform.is('android');
    }

    isIOS() : boolean {
        return this.platform.is('ios');
    }

    isWindows() : boolean {
        return this.platform.is('windows');
    }

    isMobile() : boolean {
        return this.platform.is('mobile');
    }
}