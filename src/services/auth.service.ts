import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

    constructor(private http: Http) { }

    public currentToken(): string {
        // TODO
        return '';
    }

    private storeToken(token: string): void {
        // TODO
    }
}
