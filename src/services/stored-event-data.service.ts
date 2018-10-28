import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Presentation } from '../models/presentation.model';
import { Event } from '../models/event.model';
import { Day } from '../models/day.model';
import * as _ from 'lodash';

@Injectable()
export class StoredEventDataService {

    private readonly eventsStorageKey: string = 'voxxrin.cache.events';
    private readonly eventStorageKeyPrefix: string = 'voxxrin.cache.event.';
    private readonly dayStorageKeyPrefix: string = 'voxxrin.cache.day.';
    private readonly presentationStorageKeyPrefix: string = 'voxxrin.cache.presentation.';

    private storage: Storage;

    constructor(private localStorageService: LocalStorageService) {
        this.storage = this.localStorageService.get();
    }

    public getStoredEventsData(): StoredEvents {
        return JSON.parse(this.storage.getItem(this.eventsStorageKey));
    }

    public getStoredEventDataByEventExternalId(externalId: string): StoredEvent {
        const eventRef: EventRef = this.storage.getItem(this.buildEventRefDataStorageKey(externalId));
        return eventRef ? this.getStoredEventDataByEventId(eventRef) : null;
    }

    public getStoredEventDataByEventId(id: string): StoredEvent {
        return JSON.parse(this.storage.getItem(this.buildEventDataStorageKey(id)));
    }

    public getStoredEventDataByDayId(id: string): StoredEvent {
        const eventRef: EventRef = this.storage.getItem(this.buildDayDataStorageKey(id));
        return eventRef ? this.getStoredEventDataByEventId(eventRef) : null;
    }

    public getStoredEventDataByPresentationId(id: string): StoredEvent {
        const eventRef: EventRef = this.storage.getItem(this.buildPresentationDataStorageKey(id));
        return eventRef ? this.getStoredEventDataByEventId(eventRef) : null;
    }

    public storeEventData(event: Event, days: Day[], presentations: Presentation[]) {
        this.storage.setItem(this.buildEventDataStorageKey(event._id), new StoredEvent(event, days, presentations).toString());
        this.storage.setItem(this.buildEventRefDataStorageKey(event.eventId), event._id);
        days.forEach(day => {
            this.storage.setItem(this.buildDayDataStorageKey(day.externalId), event._id);
            this.storage.setItem(this.buildDayDataStorageKey(day._id), event._id);
        });
        presentations.forEach(prez => this.storage.setItem(this.buildPresentationDataStorageKey(prez._id), event._id));
    }

    public storeEventsData(events: Event[]) {
    this.storage.setItem(this.eventsStorageKey, new StoredEvents(events).toString());
}

    private buildEventRefDataStorageKey(id: string) {
    return `${this.eventStorageKeyPrefix}${id}`;
}

    private buildEventDataStorageKey(id: string) {
    return `${this.eventStorageKeyPrefix}${id}`;
}

    private buildDayDataStorageKey(externalId: string) {
    return `${this.dayStorageKeyPrefix}${externalId}`;
}

    private buildPresentationDataStorageKey(id: string) {
    return `${this.presentationStorageKeyPrefix}${id}`;
}
}

function buildDictionnary<T extends { _id: string }>(elements: T[]): Dictionnary<T> {
    return _.keyBy(elements, element => element._id);
}

class StoredEvents {
    events: Event[];

    constructor(events: Event[]) {
        this.events = events;
    }

    public toString() {
        return JSON.stringify(this);
    }
}

class StoredEvent {
    _id: string;
    event: Event;
    days: Dictionnary<StoredDay>;
    presentations: Dictionnary<StoredPresentation>;
    date: Date;

    constructor(event: Event, days: Day[], presentations: Presentation[]) {
        this._id = event._id;
        this.event = event;
        this.days = buildDictionnary(days.map(day => new StoredDay(day)));
        this.presentations = buildDictionnary(presentations.map(prez => new StoredPresentation(prez)));
        this.date = new Date();
    }

    public toString() {
        return JSON.stringify(this);
    }
}

class StoredDay {
    _id: string;
    day: Day;
    date: Date;

    constructor(day: Day) {
        this._id = day.externalId;
        this.day = day;
        this.date = new Date();
    }
}

class StoredPresentation {
    _id: string;
    presentation: Presentation;
    date: Date;

    constructor(presentation: Presentation) {
        this._id = presentation._id;
        this.presentation = presentation;
        this.date = new Date();
    }
}

type Dictionnary<T> = { [id: string]: T; };
type EventRef = string;