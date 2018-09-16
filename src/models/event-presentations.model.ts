import { Presentation } from './presentation.model';
import { Event } from './event.model';

export class EventPresentations {

    eventId: String;
    event: Event;
    presentations: Presentation[];

    constructor(event: Event, presentations: Presentation[]) {
        this.event = event;
        this.presentations = presentations;
    }
}