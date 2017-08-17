import { Presentation } from './../models/presentation.model';
import { environment } from './../app/environment';
import { Day } from './../models/day.model';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class PresentationService {

    constructor(private http: Http) { }

    public fetchPresentations(day: Day): Observable<Presentation[]> {
        return this.http.get(`${environment.backendApiBaseUrl}/days/${day._id}/presentations`)
                .map((response: Response) => response.json())
                .map((data: any) => data as Presentation[])
                .map((presentations: Presentation[]) => _.presentations.orderBy(['from'], ['asc']));
    }

}
