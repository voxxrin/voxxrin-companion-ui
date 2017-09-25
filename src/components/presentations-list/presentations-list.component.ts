import { ConstantsService } from './../../services/constants.service';
import { TimeSlot } from './../../models/time-slot.model';
import { Presentation } from './../../models/presentation.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'presentations-list',
    templateUrl: 'presentations-list.component.html'
})
export class PresentationsListComponent {

    @Input() presentations: Presentation[];
    @Output() presentationSelected: EventEmitter<Presentation> = new EventEmitter<Presentation>();

    constructor(public constants: ConstantsService ) {}

    onSelectedPresentation(presentation: Presentation): void {
        this.presentationSelected.emit(presentation);
    }
    
    getPresentationSlotKey(presentation: Presentation, index: number, list: Presentation[]) {
        if (index == 0) {
            return presentation;
        } else if(list[index-1].from.isSame(list[index].from, "minute") 
            && list[index-1].to.isSame(list[index].to, "minute")){
            return null;
        } else {
            return presentation;
        }
    }
}