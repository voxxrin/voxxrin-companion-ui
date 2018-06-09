import { Presentation } from '../../models/presentation.model';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';
import { TimeSlot } from "../../models/time-slot.model";
import { TimeSlotService } from "../../services/time-slot.service";

@Component({
    selector: 'presentations-list',
    templateUrl: 'presentations-list.component.html'
})
export class PresentationsListComponent implements OnChanges{

    @ContentChild('presentationHeader') templateHeader: TemplateRef<Presentation>;
    @ContentChild('presentationBody') templateBody: TemplateRef<Presentation>;

    @Input() presentations: Presentation[];
    @Output() presentationSelected: EventEmitter<Presentation> = new EventEmitter<Presentation>();

    public timeSlots: TimeSlot[] = [];

    constructor(private timeslotService: TimeSlotService) {  }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.presentations) {
            this.timeSlots = this.timeslotService.convertPresentationsTimeSlots(this.presentations);
        }
    }
}