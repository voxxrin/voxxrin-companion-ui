import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Presentation } from '../models/presentation.model';
import { Day } from '../models/day.model';
import { Subscription } from '../models/subscription.model';
import { EventPresentations } from '../models/event-presentations.model';
import { AttachedContent } from '../models/attached-content.model';
import { EnvironmentService } from './environment.service';

@Injectable()
export class PresentationService {

    constructor(private httpClient: HttpClient, private envService: EnvironmentService) {}

    public fetchPresentations(day: Day): Observable<Presentation[]> {
        return this.httpClient.get(`${this.envService.getBackendUrl()}/days/${day._id}/presentations`)
            .map((data: any) => data as Presentation[])
            .map((presentations: Presentation[]) => PresentationService.preparePresentations(presentations))
            .map((presentations: Presentation[]) => _.chain(presentations)
                .orderBy('from', 'asc')
                .orderBy('to', 'asc')
                .value());
    }

    public fetchPresentationById(id: string): Observable<Presentation> {
        return this.httpClient.get(`${this.envService.getBackendUrl()}/presentations/${id}`)
            .map((data: any) => data as Presentation)
            .map((presentation: Presentation) => PresentationService.preparePresentation(presentation));
    }

    public fetchAllPresentationFromAnEvent(eventId: string): Observable<Presentation[]> {
        return this.httpClient.get(`${this.envService.getBackendUrl()}/events/${eventId}/presentations`)
            .map((data: any) => data as Presentation[])
            .map((presentations: Presentation[]) => PresentationService.preparePresentations(presentations))
            .map((presentations: Presentation[]) => _.chain(presentations)
                .orderBy('from', 'asc')
                .orderBy('to', 'asc')
                .value());
    }

    public getFavoritePresentations(): Observable<EventPresentations[]>{
        return this.httpClient.get(`${this.envService.getBackendUrl()}/favorite`)
            .map((data: any) => data as EventPresentations[])
            .map((eventPresentations: EventPresentations[]) =>
                    eventPresentations.map( ep => {
                        ep.presentations = PresentationService.preparePresentations(ep.presentations);
                        return ep;
                    }));
    }

    public bookmarkPresentation(presentationId: string, deviceToken?: string): Observable<Subscription> {
        return this.httpClient
            .post(`${this.envService.getBackendUrl()}/favorite?presentationId=${presentationId}&deviceToken=${deviceToken}`, {})
            .map((data: any) => data as Subscription);
    }

    public removePresentationBookmark(presentationId: string, deviceToken?: string): Observable<Subscription> {
        return this.httpClient
            .delete(`${this.envService.getBackendUrl()}/favorite?presentationId=${presentationId}&deviceToken=${deviceToken}`)
            .map((data: any) => data as Subscription);
    }

    public subscribeToPresentationContent(presentationId: string, deviceToken?: string): Observable<Subscription> {
        return this.httpClient
            .post(`${this.envService.getBackendUrl()}/remindme?presentationId=${presentationId}&deviceToken=${deviceToken}`, {})
            .map((data: any) => data as Subscription);
    }

    public unsubscribeFromPresentationContent(presentationId: string, deviceToken?: string): Observable<Subscription> {
        return this.httpClient
            .delete(`${this.envService.getBackendUrl()}/remindme?presentationId=${presentationId}&deviceToken=${deviceToken}`)
            .map((data: any) => data as Subscription);
    }

    public attachContent(presentationId: string, content: AttachedContent): Observable<AttachedContent> {
        return this.httpClient
            .post(`${this.envService.getBackendUrl()}/presentation/${presentationId}/attachedContent`, content)
            .map((data: any) => data as AttachedContent);
    }

    private static preparePresentations(presentations: Presentation[]) {
        return presentations.map(presentation => PresentationService.preparePresentation(presentation));
    }

    private static preparePresentation(presentation: Presentation) {
        presentation.from = moment(presentation.from);
        presentation.to = moment(presentation.to);
        return presentation;
    }
}