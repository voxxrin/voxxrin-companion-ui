import * as moment from 'moment';

export interface Event {
    name: string;
    description: string;
    location: string;
    from: moment.Moment;
    to: moment.Moment;
    imageUrl: string;
}
