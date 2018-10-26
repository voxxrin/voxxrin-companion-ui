import { ConnectivityService } from './../connectivity.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

export abstract class CacheInterceptor<T> implements HttpInterceptor {

    private urlRegex: RegExp;

    protected constructor(urlRegex: RegExp, protected connectivityService: ConnectivityService) {
        this.urlRegex = urlRegex;
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const matchingResult = this.urlRegex.exec(req.url);
        const online = this.connectivityService.getConnectivity();
        if (!online && matchingResult) {
            const args = matchingResult.splice(1);
            const cachedData: T = this.fetchDataFromCache(req, args);
            if (cachedData) {
                return of(new HttpResponse({
                    body: cachedData,
                    status: 200
                }));
            }
        }
        return next.handle(req);
    }

    protected abstract fetchDataFromCache(req: HttpRequest<any>, args: string[]): T;
}