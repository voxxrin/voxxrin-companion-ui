import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    localStorage: Storage;

    constructor() {
        this.localStorage = window.localStorage;
    }

    public get(): Storage {
        return this.localStorage;
    }
}