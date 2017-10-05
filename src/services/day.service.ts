import { Day } from '../models/day.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../app/environment';
import { Event } from '../models/event.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class DayService {

    constructor(private http: Http) { }

    public fetchDays(event: Event): Observable<Day[]> {
        return this.http.get(`${environment.backendApiBaseUrl}/events/${event._id}/days`)
            .map((response: Response) => response.json())
            .map((data: any) => data as Day[])
            .map((days: Day[]) => _.chain(days).orderBy('date', 'asc').value());
    }
}
