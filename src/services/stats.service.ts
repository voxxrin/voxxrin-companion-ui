import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Statistic } from '../models/stats.model'
import { Observable } from 'rxjs/Rx';
import { environment } from '../app/environment';

@Injectable()
export class StatsService {

    constructor (private http: Http) {}

    public fecthStats() : Observable<Statistic> {
        return this.http.get(`${environment.backendApiBaseUrl}/stats/event/5935c2d3e4b080c4b46a8e1b`)
            .map((response: Response) => response.json())
            .map((data: any) => data as Statistic);
    }
}