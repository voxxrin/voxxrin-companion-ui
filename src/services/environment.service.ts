import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import * as _ from 'lodash';

@Injectable()
export class EnvironmentService {

    private readonly storageKey: string = '__env__';
    private readonly envs: { [name: string]: Environment } = {
        test: { name: 'test', backendUrl: 'http://appv3-test.voxxr.in/api' },
        prod: { name: 'prod', backendUrl: 'http://appv3.voxxr.in/api' }
    };

    private currentEnv: Environment;

    constructor(private localStorageService: LocalStorageService) {
        this.currentEnv = JSON.parse(this.localStorageService.get().getItem(this.storageKey));
        console.log('current env', this.get());
    }

    public allEnvs(): Environment[] {
        return _.values(this.envs);
    }

    public get(): Environment {
        return this.currentEnv || this.envs['prod'];
    }

    public getBackendUrl(): string {
        return this.get().backendUrl;
    }

    public set(env: Environment): void {
        this.currentEnv = env;
        this.localStorageService.get().setItem(this.storageKey, JSON.stringify(env));
        window.location.reload();
    }
}

export interface Environment {
    name: string;
    backendUrl: string;
}