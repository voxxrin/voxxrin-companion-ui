import { Day } from '../models/day.model';
import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

@Injectable()
export class DayService {

    constructor(private http: HttpClient, private envService: EnvironmentService) { }

    public fetchDays(event: Event): Observable<Day[]> {
        return this.http.get(`${this.envService.getBackendUrl()}/events/${event._id}/days`)
            .map((data: any) => data as Day[])
            .map((days: Day[]) => _.chain(days).orderBy('date', 'asc').value());
    }

    public fetchDayById(id: string): Observable<Day> {
        return this.http.get(`${this.envService.getBackendUrl()}/days/${id}`)
            .map((data: any) => data as Day);
    }
}
