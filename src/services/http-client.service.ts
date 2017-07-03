import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class HttpClient {

    constructor(private http: Http, private localStorageService: LocalStorageService) { }

    private createAuthorizationHeader(headers: Headers, token: string) {
        headers.append('Authorization', `Bearer ${token}`);
    }

    private getStoredToken(): string {
        return this.localStorageService.get().getItem('token');
    }

    public get(url: string, opts?: any) {
        let headers = new Headers();
        const token = this.getStoredToken();
        if (token) {
            this.createAuthorizationHeader(headers, token);
        }
        return this.http.get(url, { headers: headers });
    }

    public post(url, data, opts?: any) {
        let headers = new Headers();
        const token = this.getStoredToken();
        if (token) {
            this.createAuthorizationHeader(headers, token);
        }
        return this.http.post(url, data, Object.assign({ headers: headers }, opts));
    }
}