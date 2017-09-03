import { Presentation } from './../models/presentation.model';
import { environment } from './../app/environment';
import { Day } from './../models/day.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PresentationService {
    constructor (private httpClient: HttpClient) {}

    public fetchPresentations(day: Day): Observable<Presentation[]> {
        return this.http.get(`${environment.backendApiBaseUrl}/days/${day._id}/presentations`)
                .map((response: Response) => response.json())
                .map((data: any) => data as Presentation[])
                .map((presentations: Presentation[]) => _.presentations.orderBy(['from'], ['asc']));
    }

    public getAllPresentation() : Observable<Presentation[]> {
        return this.httpClient.get(`${environment.backendApiBaseUrl}/events/5935c2d3e4b080c4b46a8e1b/presentations`)
            .map((data: any) => data as Presentation[]);
    }
}