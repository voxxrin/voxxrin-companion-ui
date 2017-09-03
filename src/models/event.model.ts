import { Day } from './day.model';
import * as moment from 'moment';

export interface Event {
    _id: string;
    name: string;
    description: string;
    location: string;
    from: moment.Moment;
    to: moment.Moment;
    days: Day[];
    imageUrl: string;
}
