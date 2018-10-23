import { ConnectivityService } from './../connectivity.service';
import { Injectable } from '@angular/core';
import { CacheInterceptor } from './cache-interceptor';
import { HttpRequest } from '@angular/common/http';
import { StoredEventDataService } from '../stored-event-data.service';
import * as _ from 'lodash';
import { Presentation } from '../../models/presentation.model';

@Injectable()
export class PresentationsCacheInterceptor extends CacheInterceptor<Presentation[]> {

    constructor(private storedEventDataService: StoredEventDataService, protected connectivityService: ConnectivityService) {
        super(new RegExp('/days/([^/]+)/presentations$'), connectivityService);
    }

    protected fetchDataFromCache(req: HttpRequest<any>, args: string[]): Presentation[] {
        const storedEventData = this.storedEventDataService.getStoredEventDataByDayId(args[0]);
        if (storedEventData && storedEventData.presentations) {
            return _.values(storedEventData.presentations).map(storedPresentation => storedPresentation.presentation);
        }
    }
}
