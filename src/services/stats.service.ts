import { Event } from './../models/event.model';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Statistic } from '../models/stats.model'
import { Observable } from 'rxjs/Rx';
import { environment } from '../app/environment';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StatsService {

    constructor (private http: HttpClient) {}

    public getStatFromPresentation(event: Event) : Observable<Statistic> {
        return this.http.get(`${environment.backendApiBaseUrl}/stats/event/${event._id}`)
            .map((data: any) => data as Statistic);
    }
}