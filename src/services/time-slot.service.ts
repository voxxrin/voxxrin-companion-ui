import { TimeSlot } from '../models/time-slot.model';
import { Presentation } from '../models/presentation.model';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class TimeSlotService {

    constructor() { }

    public convertPresentationsTimeSlots(presentations: Presentation[]): TimeSlot[] {
        return _.chain(presentations)
                .groupBy(this.toTimeSlotKey)
                .map((value:Presentation[], key:string) => new TimeSlot({from: value[0].from, to: value[0].to, presentations: value}))
                .value();
    }

    private toTimeSlotKey (presentation: Presentation): string {            
        return presentation.from.format('YYYY-MM-DD-HH-mm') + presentation.to.format('YYYY-MM-DD-HH-mm');
    }

}