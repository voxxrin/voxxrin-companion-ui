import { Event } from './../models/event.model';
import { Presentation } from './../models/presentation.model';
import { environment } from './../app/environment';
import { Day } from './../models/day.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PresentationService {
    constructor (private httpClient: HttpClient) {}

    public fetchPresentations(day: Day): Observable<Presentation[]> {
        return this.httpClient.get(`${environment.backendApiBaseUrl}/days/${day._id}/presentations`)
                .map((data: any) => data as Presentation[])
                .map((presentations: Presentation[]) =>_.orderBy(presentations, ['from'], ['asc']));
    }

    public getAllPresentationFromAnEvent(event: Event) : Observable<Presentation[]> {
        return this.httpClient.get(`${environment.backendApiBaseUrl}/events/${event._id}/presentations`)
            .map((data: any) => data as Presentation[]);
    }
}