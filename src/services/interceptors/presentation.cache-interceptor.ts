import { Injectable } from '@angular/core';
import { CacheInterceptor } from './cache-interceptor';
import { HttpRequest } from '@angular/common/http';
import { StoredEventDataService } from '../stored-event-data.service';
import { Presentation } from '../../models/presentation.model';

@Injectable()
export class PresentationCacheInterceptor extends CacheInterceptor<Presentation> {

    constructor(private storedEventDataService: StoredEventDataService) {
        super(new RegExp('/presentations/([^/]+)$'));
    }

    protected fetchDataFromCache(req: HttpRequest<any>, args: string[]): Presentation {
        const storedEventData = this.storedEventDataService.getStoredEventDataByPresentationId(args[0]);
        if (storedEventData && storedEventData.presentations) {
            const storedPresentation = storedEventData.presentations[args[0]];
            return storedPresentation ? storedPresentation.presentation : null;
        }
    }
}
