import { Injectable } from '@angular/core';
import { Statistic } from '../models/stats.model'
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

@Injectable()
export class StatsService {

    constructor(private http: HttpClient, private envService: EnvironmentService) { }

    public getEventStats(eventId: string): Observable<Statistic> {
        return this.http.get(`${this.envService.getBackendUrl()}/stats/event/${eventId}`)
            .map((data: any) => data as Statistic);
    }
}