import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { RatingItem } from '../models/rating-item.model';
import { Presentation } from '../models/presentation.model';
import { Rating } from '../models/rating.model';
import * as _ from 'lodash';
import { EnvironmentService } from './environment.service';

@Injectable()
export class RatingService {

    constructor(private http: HttpClient, private envService: EnvironmentService) { }

    public fetchAllItems(): Observable<RatingItem[]> {
        return this.http.get(`${this.envService.getBackendUrl()}/rating/item`)
            .map((data: any) => data as RatingItem[]);
    }

    public fetchPresentationRatings(presentation: Presentation): Observable<RatingItem[]> {
        return this.http.get(`${this.envService.getBackendUrl()}/rating/presentation/${presentation._id}`)
            .map((data: any) => data as Rating[])
            .map((ratings: Rating[]) => _.first(ratings))
            .map((rating: Rating) => rating ? rating.ratingItems : []);
    }

    public rate(presentation: Presentation, items: RatingItem[]): Observable<any> {
        return this.http
            .put(`${this.envService.getBackendUrl()}/rating/presentation/${presentation._id}`, items)
            .map((data: any) => data as RatingItem[]);
    }
}