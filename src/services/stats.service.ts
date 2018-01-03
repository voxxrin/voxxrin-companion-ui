import { Event } from './../models/event.model';
import { Injectable } from '@angular/core';
import { Statistic } from '../models/stats.model'
import { Observable } from 'rxjs/Rx';
import { environment } from '../app/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StatsService {

    constructor(private http: HttpClient) { }

    public getEventStats(eventId: string): Observable<Statistic> {
        return this.http.get(`${environment.backendApiBaseUrl}/stats/event/${eventId}`)
            .map((data: any) => data as Statistic);
    }
}