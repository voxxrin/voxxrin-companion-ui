import { Injectable } from '@angular/core';
import { environment } from '../app/environment';
import { Event } from '../models/event.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {

    constructor(private http: HttpClient) { }

    public fetchEvents(): Observable<Event[]> {
        return this.http.get(`${environment.backendApiBaseUrl}/events`)
            .map((data: any) => data as Event[])
            .map((events: Event[]) => this.parseEvents(events))
            .map((events: Event[]) => _.chain(events).orderBy('from', 'desc').value());
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
