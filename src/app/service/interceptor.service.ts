import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuard } from '../Guards/auth.guard';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private inject:Injector) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authservice=this.inject.get(ServiceService)
    let jwtToken = req.clone({
      setHeaders: {
        authorization: authservice.getToken()
      },
    });
    return next.handle(jwtToken);
  }


}
