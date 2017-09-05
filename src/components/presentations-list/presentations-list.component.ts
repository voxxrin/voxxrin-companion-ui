import { Presentation } from './../../models/presentation.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'presentations-list',
    templateUrl: 'presentations-list.component.html'
})
export class PresentationsListComponent {

    @Input() presentations: Presentation[];
    @Output() presentationSelected: EventEmitter<Presentation> = new EventEmitter<Presentation>();

    constructor() {}

    onSelectedPresentation(presentation: Presentation): void {
        this.presentationSelected.emit(presentation);
    }
}