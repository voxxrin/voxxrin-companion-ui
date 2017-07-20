import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { JWTService } from './jwt.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(private jwtService: JWTService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const currentToken = this.jwtService.currentToken();
        if (currentToken) {
            return next.handle(req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${currentToken}`
                }
            }));
        }

        return next.handle(req);
    }
}
