import { Room } from './room.model';
import * as moment from 'moment';
import { Speaker } from './speaker.model';
import { AttachedContent } from './attached-content.model';

export interface Presentation {
    _id: string;
    externalId: string;
    title: string;
    summary: string;
    speakers: Speaker[];
    location: Room;
    favorite: boolean;
    reminded: boolean;
    from: moment.Moment;
    to: moment.Moment;
    kind: string;    
    eventId: string;
    favoriteCount: number;
    remindMeCount: number;
    rated: boolean;
    releasedContents: AttachedContent[];
}
