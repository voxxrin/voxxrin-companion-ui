import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { JWTService } from './jwt.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    private readonly concernedDomains = ['voxxr.in'];

    constructor(private jwtService: JWTService) { }

    private isConcerned(url): boolean {
        return this.concernedDomains.some(domain => url.indexOf(domain) >= 0);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const currentToken = this.jwtService.currentToken();
        if (currentToken && this.isConcerned(req.url)) {
            return next.handle(req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${currentToken}`
                }
            }));
        }

        return next.handle(req);
    }
}
