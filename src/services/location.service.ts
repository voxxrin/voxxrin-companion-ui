import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Location } from '../models/location.model';
import { environment } from '../app/environment';

@Injectable()
export class LocationService {

    constructor(private httpClient: HttpClient) { }

    public geocode(q: string): Observable<Location> {
        return this.httpClient
            .get(this.buildUrl(q))
            .filter((response: any) => response)
            .filter((response: any) => response.results && response.results.length && response.results.length > 0)
            .map((response: any) => response.results[0].geometry.location)
            .map((location: any) => new Location(location.lat, location.lng));
    }

    private buildUrl(location: string): string {
        return `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${environment.googleApiKey}`;
    }
}