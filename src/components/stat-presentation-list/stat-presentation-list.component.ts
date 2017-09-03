import { Presentation } from './../../models/presentation.model';
import { Component, Input } from '@angular/core';

@Component ({
    selector: 'stat-presentation-list',
    templateUrl: 'stat-presentation-list.component.html'
})
export class StatPresentationListComponent {

    @Input() presentations: Presentation[];

    constructor(){}
}