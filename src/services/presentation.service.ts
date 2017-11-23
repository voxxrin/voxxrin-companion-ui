import { Event } from './../models/event.model';
import { Presentation } from './../models/presentation.model';
import { environment } from './../app/environment';
import { Day } from './../models/day.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable()
export class PresentationService {

    constructor (private httpClient: HttpClient) {}

    public fetchPresentations(day: Day): Observable<Presentation[]> {
        return this.httpClient.get(`${environment.backendApiBaseUrl}/days/${day._id}/presentations`)
                .map((data: any) => data as Presentation[])
                .map((presentations: Presentation[]) => this.parsePresentations(presentations))
                .map((presentations: Presentation[]) =>_.chain(presentations)
                                                        .orderBy('from', 'asc')
                                                        .orderBy('to','asc')
                                                        .value());
    }

    public getAllPresentationFromAnEvent(event: Event) : Observable<Presentation[]> {
        return this.httpClient.get(`${environment.backendApiBaseUrl}/events/${event._id}/presentations`)
            .map((data: any) => data as Presentation[])
            .map((presentations: Presentation[]) => this.parsePresentations(presentations))
            .map((presentations: Presentation[]) =>_.chain(presentations)
                                                    .orderBy('from', 'asc')
                                                    .orderBy('to','asc')
                                                    .value());
    }

    private parsePresentations(presentations: Presentation[]) {
        return presentations.map(presentation => this.parsePresentation(presentation));
    }

    private parsePresentation(presentation: Presentation) {
        presentation.from = moment(presentation.from);
        presentation.to = moment(presentation.to);
        return presentation;
    }
}