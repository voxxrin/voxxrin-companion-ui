import { Injectable } from '@angular/core';
import { JWTService } from './jwt.service';
import { environment } from '../app/environment';
import { BehaviorSubject, Observable, Subscription } from 'rxjs/Rx';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

export type OAuthProvider = 'twitter' | 'linkedin' | 'facebook';

@Injectable()
export class AuthService {

    private subscription: Subscription;
    public static currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor(private jwtService: JWTService, private httpClient: HttpClient) {
        this.validateTokenAndFetchCurrentUser();
    }

    public auth(provider: OAuthProvider): void {
        const authWindow = window.open(`${environment.backendApiBaseUrl}/auth/redirect/${provider}`, '_blank');
        if (window.addEventListener) {
            window.addEventListener('message', (event) => this.retrieveCredentials(event), false);
            this.subscription = Observable.timer(0, 1000).subscribe(() => authWindow.postMessage('requestCredentials', '*'));
        } else if (window['cordova']) {
            // TODO
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
                .get(`${environment.backendApiBaseUrl}/auth/validate`)
                .subscribe((user: User) => AuthService.currentUserSubject.next(user));
        }
    }

    private retrieveCredentials(event) {
        if (event.data.message === 'deliverCredentials') {
            this.subscription.unsubscribe();
            if (event.data.auth_token) {
                this.jwtService.storeToken(event.data.auth_token);
                this.validateTokenAndFetchCurrentUser();
            }
        }
    }
}
