import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

import { Event } from '../models/event.model';
import { Presentation } from '../models/presentation.model';
import { environment } from '../app/environment';
import { Day } from '../models/day.model';

@Injectable()
export class PresentationService {

    constructor(private httpClient: HttpClient) {}

    public fetchPresentations(day: Day): Observable<Presentation[]> {
        return this.httpClient.get(`${environment.backendApiBaseUrl}/days/${day._id}/presentations`)
            .map((data: any) => data as Presentation[])
            .map((presentations: Presentation[]) => PresentationService.preparePresentations(presentations))
            .map((presentations: Presentation[]) => _.chain(presentations)
                .orderBy('from', 'asc')
                .orderBy('to', 'asc')
                .value());
    }

    public fetchPresentationById(id: string): Observable<Presentation> {
        return this.httpClient.get(`${environment.backendApiBaseUrl}/presentations/${id}`)
            .map((data: any) => data as Presentation)
            .map((presentation: Presentation) => PresentationService.preparePresentation(presentation));
    }

    public getAllPresentationFromAnEvent(event: Event): Observable<Presentation[]> {
        return this.httpClient.get(`${environment.backendApiBaseUrl}/events/${event._id}/presentations`)
            .map((data: any) => data as Presentation[])
            .map((presentations: Presentation[]) => PresentationService.preparePresentations(presentations))
            .map((presentations: Presentation[]) => _.chain(presentations)
                .orderBy('from', 'asc')
                .orderBy('to', 'asc')
                .value());
    }

    private static preparePresentations(presentations: Presentation[]) {
        return presentations.map(presentation => PresentationService.preparePresentation(presentation));
    }

    private static preparePresentation(presentation: Presentation) {
        presentation.from = moment(presentation.from);
        presentation.to = moment(presentation.to);
        return presentation;
    }
}