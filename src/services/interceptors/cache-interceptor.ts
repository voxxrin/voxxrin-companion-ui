import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class CacheInterceptor<T> implements HttpInterceptor {

    private urlRegex: RegExp;

    protected constructor(urlRegex: RegExp) {
        this.urlRegex = urlRegex;
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const matchingResult = this.urlRegex.exec(req.url);
        const online = true; // TODO - replace by real network status
        if (!online && matchingResult) {
            const cachedData: T = this.fetchDataFromCache(req, matchingResult.splice(1));
            if (cachedData) {
                // TODO - return cached data
            }
        }
        return next.handle(req);
    }

    protected abstract fetchDataFromCache(req: HttpRequest<any>, args: string[]): T;
}