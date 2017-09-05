import { Day } from './day.model';
import { Presentation } from './presentation.model';
import * as moment from 'moment';

export class TimeSlot {
    day: Day;
    from: moment.Moment;
    to: moment.Moment;
    presentations: Presentation[];

    public constructor(init?:Partial<TimeSlot>) {
        Object.assign(this, init);
    }
}