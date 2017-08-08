import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Statistic } from '../models/stats.model'
import { Observable } from 'rxjs/Rx';
import { environment } from '../app/environment';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StatsService {

    constructor (private http: HttpClient) {}

    public fecthStats() : Observable<Statistic> {
        return this.http.get(`${environment.backendApiBaseUrl}/stats/event/5935c2d3e4b080c4b46a8e1b`)
            .map((data: any) => data as Statistic);
    }
}