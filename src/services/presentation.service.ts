import { environment } from './../app/environment';
import { Observable } from 'rxjs/Observable';
import { Presentation } from './../models/presentation.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PresentationService {

    constructor (private httpClient: HttpClient) {}

    public getAllPresentation() : Observable<Presentation[]> {
        return this.httpClient.get(`${environment.backendApiBaseUrl}/events/5935c2d3e4b080c4b46a8e1b/presentations`)
            .map((data: any) => data as Presentation[]);
    }
}