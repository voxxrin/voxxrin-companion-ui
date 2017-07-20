import { Injectable } from '@angular/core';
import { JWTService } from './jwt.service';
import { environment } from '../app/environment';
import { BehaviorSubject, Observable, Subscription } from 'rxjs/Rx';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

export type OAuthProvider = 'twitter' | 'linkedin';

@Injectable()
export class AuthService {

    private subscription: Subscription;
    private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor(private jwtService: JWTService, private httpClient: HttpClient) {
        this.validateTokenIfExists();
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
        return this.currentUserSubject.asObservable();
    }

    public logout() {
        this.jwtService.clearToken();
        this.currentUserSubject.next(null);
    }

    private validateTokenIfExists() {
        if (this.jwtService.currentToken() != null) {
            this.httpClient
                .get(`${environment.backendApiBaseUrl}/auth/validate`)
                .subscribe((user: User) => this.currentUserSubject.next(user));
        }
    }

    private retrieveCredentials(event) {
        if (event.data.message === 'deliverCredentials') {
            this.subscription.unsubscribe();
            if (event.data.auth_token) {
                this.jwtService.storeToken(event.data.auth_token);
                this.currentUserSubject.next(event.data);
            }
        }
    }
}
