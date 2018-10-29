import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home.page';
import { PushService } from '../services/push.service';
import { AuthService } from '../services/auth.service';
import { ConnectivityService } from '../services/connectivity.service';

@Component({
    templateUrl: './app.component.html'
})
export class AppComponent {

    rootPage: any = HomePage;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                pushService: PushService,
                authService: AuthService,
                connectivityService: ConnectivityService) {

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            pushService.setup();
        });
        authService.validateTokenAndFetchCurrentUser();
        connectivityService.init();
    }
}

