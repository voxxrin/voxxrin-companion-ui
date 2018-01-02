import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../app/environment';
import { Tweet } from '../models/tweet.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Event } from '../models/event.model';

@Injectable()
export class FeedService {

    private baseUrl: string = `${environment.backendApiBaseUrl}/feeds`;

    constructor(private httpClient: HttpClient) { }

    public fetchTwitterFeed(eventId: string): Observable<Tweet[]> {
        const params = new HttpParams().append('eventId', eventId);
        return this.httpClient.get(`${this.baseUrl}/twitter`, { params: params })
            .map((data: any) => data as Tweet[]);
    }
}