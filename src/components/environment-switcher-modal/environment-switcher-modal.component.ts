import { Component, OnInit } from '@angular/core';
import { Environment, EnvironmentService } from '../../services/environment.service';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'environment-switcher-modal',
    templateUrl: './environment-switcher-modal.component.html'
})
export class EnvironmentSwitcherModalComponent implements OnInit {

    public envs: Environment[];
    private currentEnv: Environment;

    constructor(private viewCtrl: ViewController, private envService: EnvironmentService) {}

    ngOnInit(): void {
        this.envs = this.envService.allEnvs();
        this.currentEnv = this.envService.get();
    }

    public selectEnv(env: Environment): void {
        this.envService.set(env);
    }

    public isCurrentEnv(env: Environment): boolean {
        return this.currentEnv.name === env.name;
    }

    public close() {
        this.viewCtrl.dismiss();
    }
}
