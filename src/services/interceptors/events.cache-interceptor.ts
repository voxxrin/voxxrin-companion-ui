import { ConnectivityService } from '../connectivity.service';
import { Injectable } from '@angular/core';
import { CacheInterceptor } from './cache-interceptor';
import { HttpRequest } from '@angular/common/http';
import { StoredEventDataService } from '../stored-event-data.service';
import { Event } from '../../models/event.model';
import * as _ from 'lodash';

@Injectable()
export class EventsCacheInterceptor extends CacheInterceptor<Event[]> {

    constructor(private storedEventDataService: StoredEventDataService, protected connectivity: ConnectivityService) {
        super(new RegExp('/events$'), connectivity);
    }

    protected fetchDataFromCache(req: HttpRequest<any>, args: string[]): Event[] {
        const storedEventsData = this.storedEventDataService.getStoredEventsData();
        if (storedEventsData && storedEventsData.events) {
            return storedEventsData.events;
        }
        return [];
    }
}
