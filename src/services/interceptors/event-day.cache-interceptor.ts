import { ConnectivityService } from './../connectivity.service';
import { Injectable } from '@angular/core';
import { CacheInterceptor } from './cache-interceptor';
import { HttpRequest } from '@angular/common/http';
import { StoredEventDataService } from '../stored-event-data.service';
import { Day } from '../../models/day.model';
import * as _ from 'lodash';

@Injectable()
export class EventDayCacheInterceptor extends CacheInterceptor<Day> {

    constructor(private storedEventDataService: StoredEventDataService, protected connectivityService: ConnectivityService) {
        super(new RegExp('/days/([^/]+)$'), connectivityService);
    }

    protected fetchDataFromCache(req: HttpRequest<any>, args: string[]): Day {
        const storedEventData = this.storedEventDataService.getStoredEventDataByDayId(args[0]);
        if (storedEventData && storedEventData.days) {
            const storedDay = storedEventData.days[args[0]];
            return storedDay ? storedDay.day : null;
        }
    }
}
