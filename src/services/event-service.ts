import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../app/environment';
import { Event } from '../models/event';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EventService {

    constructor(private http: Http) {
    }

    public fetchEvents(): Observable<Event[]> {
        return this.http.get(`${environment.backendApiBaseUrl}/events`)
            .map((response: Response) => response.json())
            .map((data: any) => data as Event[]);
    }
}