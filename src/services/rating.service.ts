import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../app/environment';
import { HttpClient } from '@angular/common/http';
import { RatingItem } from '../models/rating-item.model';
import { Presentation } from '../models/presentation.model';
import { Rating } from '../models/rating.model';

@Injectable()
export class RatingService {

    constructor(private http: HttpClient) { }

    public fetchAllItems(): Observable<RatingItem[]> {
        return this.http.get(`${environment.backendApiBaseUrl}/rating/item`)
            .map((data: any) => data as RatingItem[]);
    }

    public fetchPresentationRatings(presentation: Presentation): Observable<RatingItem[]> {
        return this.http.get(`${environment.backendApiBaseUrl}/presentation/${presentation._id}`)
            .map((data: any) => data as Rating[])
            .flatMap((ratings: Rating[]) => ratings.map(rating => rating.ratingItems));
    }

    public rate(presentation: Presentation, items: RatingItem[]): Observable<any> {
        return this.http
            .put(`${environment.backendApiBaseUrl}/rating/presentation/${presentation._id}`, items)
            .map((data: any) => data as RatingItem[]);
    }
}