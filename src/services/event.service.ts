import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

@Injectable()
export class EventService {

    constructor(private http: HttpClient, private envService: EnvironmentService) { }

    private static prepareEvent(event: Event) {
        event.from = moment(event.from);
        event.to = moment(event.to);
        return event;
    }

    public fetchEvents(): Observable<Event[]> {
        return this.http.get(`${this.envService.getBackendUrl()}/events`)
            .map((data: any) => data as Event[])
            .map((events: Event[]) => events.map(event => EventService.prepareEvent(event)));
    }

    public fetchEventById(id: string): Observable<Event> {
        return this.http.get(`${this.envService.getBackendUrl()}/events/${id}`)
            .map((data: any) => data as Event)
            .map((event: Event) => EventService.prepareEvent(event));
    }

    public updateData(event: Event): Observable<Event> {
        return this.http.put(`${this.envService.getBackendUrl()}/events/${event._id}`, event)
            .map((data: any) => data as Event)
            .map((event: Event) => EventService.prepareEvent(event));
    }
}
