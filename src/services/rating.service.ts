import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../app/environment';
import { HttpClient } from '@angular/common/http';
import { RatingItem } from '../models/rating-item.model';
import { Presentation } from '../models/presentation.model';
import { Rating } from '../models/rating.model';
import * as _ from 'lodash';

@Injectable()
export class RatingService {

    private readonly baseUrl: string = `${environment.backendApiBaseUrl}/rating`;

    constructor(private http: HttpClient) { }

    public fetchAllItems(): Observable<RatingItem[]> {
        return this.http.get(`${this.baseUrl}/item`)
            .map((data: any) => data as RatingItem[]);
    }

    public fetchPresentationRatings(presentation: Presentation): Observable<RatingItem[]> {
        return this.http.get(`${this.baseUrl}/presentation/${presentation._id}`)
            .map((data: any) => data as Rating[])
            .map((ratings: Rating[]) => _.first(ratings))
            .map((rating: Rating) => rating ? rating.ratingItems : []);
    }

    public rate(presentation: Presentation, items: RatingItem[]): Observable<any> {
        return this.http
            .put(`${this.baseUrl}/presentation/${presentation._id}`, items)
            .map((data: any) => data as RatingItem[]);
    }
}