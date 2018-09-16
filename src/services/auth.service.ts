import { Injectable } from '@angular/core';
import { JWTService } from './jwt.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs/Rx';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

export type OAuthProvider = 'twitter' | 'linkedin' | 'facebook';

@Injectable()
export class AuthService {

    private subscription: Subscription;
    public static currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor(private jwtService: JWTService, private httpClient: HttpClient, private envService: EnvironmentService) {
        this.validateTokenAndFetchCurrentUser();
    }

    public auth(provider: OAuthProvider): void {
        const authWindow: any = window.open(`${this.envService.getBackendUrl()}/auth/redirect/${provider}`, '_blank');
        if (window['cordova']) {
            authWindow.addEventListener('loadstop', () => {
                authWindow.executeScript({code: 'requestCredentials()'}, response => {
                    authWindow.close();
                    this.retrieveCredentialsByScriptExecution(response);
                    window.location.reload();
                });
            });
        } else {
            window.addEventListener('message', (event) => this.retrieveCredentialsByPostMessage(event), false);
            this.subscription = Observable.timer(0, 1000).subscribe(() => authWindow.postMessage('requestCredentials', '*'));
        }
    }

    public currentUser(): Observable<User> {
        return AuthService.currentUserSubject.asObservable().map(user => this.transformOAuthUser(user));
    }

    public logout() {
        this.jwtService.clearToken();
        AuthService.currentUserSubject.next(null);
    }

    private transformOAuthUser(user) {
        if (user) {
            if (!user.avatarUrl && user.providerInfo && user.providerInfo['profile_image_url_https']) {
                user.avatarUrl = user.providerInfo['profile_image_url_https'];
            }
        }
        return user;
    }

    private validateTokenAndFetchCurrentUser() {
        if (this.jwtService.currentToken() != null) {
            this.httpClient
                .get(`${this.envService.getBackendUrl()}/auth/validate`)
                .subscribe((user: User) => AuthService.currentUserSubject.next(user), () => this.jwtService.clearToken());
        }
    }

    private retrieveCredentialsByScriptExecution(response) {
        if (response && response[0] && response[0].auth_token) {
            this.storeToken(response[0].auth_token);
        }
    }

    private retrieveCredentialsByPostMessage(event) {
        if (event.data.message === 'deliverCredentials') {
            this.subscription.unsubscribe();
            if (event.data.auth_token) {
                this.storeToken(event.data.auth_token);
            }
        }
    }

    private storeToken(token) {
        this.jwtService.storeToken(token);
        this.validateTokenAndFetchCurrentUser();
    }
}
