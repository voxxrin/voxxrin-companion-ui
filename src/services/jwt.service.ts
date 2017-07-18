import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class JWTService {

    readonly tokenStorageKey: string = '__authToken__';

    constructor(private localStorageService: LocalStorageService) { }

    public currentToken(): string {
        return this.localStorageService.get().getItem(this.tokenStorageKey);
    }

    public storeToken(token: string): void {
        this.localStorageService.get().setItem(this.tokenStorageKey, token);
    }
}