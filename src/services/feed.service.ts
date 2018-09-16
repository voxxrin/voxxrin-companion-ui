import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tweet } from '../models/tweet.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

@Injectable()
export class FeedService {

    constructor(private httpClient: HttpClient, private envService: EnvironmentService) { }

    public fetchTwitterFeed(eventId: string): Observable<Tweet[]> {
        const params = new HttpParams().append('eventId', eventId);
        return this.httpClient
            .get(`${this.envService.getBackendUrl()}/feeds/twitter`, { params: params })
            .map((data: any) => data as Tweet[]);
    }
}