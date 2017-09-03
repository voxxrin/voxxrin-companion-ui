import { Speaker } from './speaker.model';

export interface Presentation {
    _id: string;
    title: string;
    summary: string;
    speakers: Speaker[];
    location: Location;
    from: Date;
    to: Date;
    kind: string;    
    eventId: string;
    favoriteCount: number;
    remindMeCount: number;
}
