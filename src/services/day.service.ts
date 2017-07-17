import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../app/environment';
import { Event } from '../models/event.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import * as _ from 'lodash';

@Injectable()
export class DayService {

    constructor(private http: Http) { }

    public fetchDays(eventId: string): Observable<Event[]> {
        return this.http.get(`${environment.backendApiBaseUrl}/events`)
            .map((response: Response) => response.json())
            .map((data: any) => data as Event[])
            .map((events: Event[]) => this.parseEvents(events))
            .map((events: Event[]) => _.orderBy(events, ['from'], ['desc']));
    }

    private parseEvents(events: Event[]) {
        return events.map(event => this.parseEvent(event));
    }

    private parseEvent(event: Event) {
        event.from = moment(event.from);
        event.to = moment(event.to);
        return event;
    }
}
