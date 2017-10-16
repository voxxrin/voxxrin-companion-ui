import { Room } from './room.model';
import * as moment from 'moment';
import { Speaker } from './speaker.model';

export interface Presentation {
    _id: string;
    title: string;
    summary: string;
    speakers: Speaker[];
    location: Room;
    from: moment.Moment;
    to: moment.Moment;
    kind: string;    
    eventId: string;
    favoriteCount: number;
    remindMeCount: number;
}
