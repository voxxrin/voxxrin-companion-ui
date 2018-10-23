import { ConnectivityService } from './../connectivity.service';
import { Injectable } from '@angular/core';
import { CacheInterceptor } from './cache-interceptor';
import { HttpRequest } from '@angular/common/http';
import { StoredEventDataService } from '../stored-event-data.service';
import { Day } from '../../models/day.model';
import * as _ from 'lodash';

@Injectable()
export class EventDaysCacheInterceptor extends CacheInterceptor<Day[]> {

    constructor(private storedEventDataService: StoredEventDataService, protected connectivity: ConnectivityService) {
        super(new RegExp('/events/([^/]+)/days$'), connectivity);
    }

    protected fetchDataFromCache(req: HttpRequest<any>, args: string[]): Day[] {
        const storedEventData = this.storedEventDataService.getStoredEventDataByEventId(args[0]);
        if (storedEventData && storedEventData.days) {
            return _.values(storedEventData.days).map(storedDay => storedDay.day);
        }
    }
}
