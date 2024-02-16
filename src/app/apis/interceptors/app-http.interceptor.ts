import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from "../auth/auth.service";
import {catchError} from "rxjs/operators";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("****")
    console.log(request.url)
    if(!request.url.includes("/token")){
      let newreq = request.clone({
        headers : request.headers.set('Authorization','Bearer '+this.authService.accessToken)
      })
      return next.handle(newreq).pipe(
        catchError(err => {
          if(err.status==401){
            this.authService.logout();
          }
          return throwError(err.message)
        })
      );
    } else {
      return next.handle(request);
    }

  }
}
