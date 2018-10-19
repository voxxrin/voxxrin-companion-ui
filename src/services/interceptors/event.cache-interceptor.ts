import { Injectable } from '@angular/core';
import { CacheInterceptor } from './cache-interceptor';
import { HttpRequest } from '@angular/common/http';
import { StoredEventDataService } from '../stored-event-data.service';
import { Event } from '../../models/event.model';

@Injectable()
export class EventCacheInterceptor extends CacheInterceptor<Event> {

    constructor(private storedEventDataService: StoredEventDataService) {
        super(new RegExp('/events/([^/]+)$'));
    }

    protected fetchDataFromCache(req: HttpRequest<any>, args: string[]): Event {
        const storedEventData = this.storedEventDataService.getStoredEventDataByEventId(args[0]);
        if (storedEventData) {
            return storedEventData.event;
        }
    }
}
