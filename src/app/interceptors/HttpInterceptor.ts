import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { assign } from 'lodash';
import { stringify } from 'query-string';
import { tap, map } from 'rxjs/operators';
import { Token } from '../@core/models/User';
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {
    const tokenInfo = sessionStorage.getItem('token');

    if (tokenInfo) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenInfo}`,
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } else if (request.url.indexOf('token') !== -1) {
      request.body['userName'] = request.body['email'];
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        body: stringify(
          assign({}, request.body, {
            grant_type: 'password',
            client_id: 'aG91c2V5LW1vYmlsZS1hcHA',
            client_secret: 'aG91c2VleS1jbGllbnQtc2VjcmV',
          }),
        ),
      });
    } else {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
    }
    if (request.url.indexOf('token') !== -1) {
      return newRequest.handle(request).pipe(
        map((event: HttpResponse<Token>) => {
          if (event.body) {
            const newTokenFormat = {
              FirstName: event.body.FirstName,
              LastName: event.body.LastName,
              Roles: event.body.Roles,
            };
            localStorage.setItem('Roles', event.body.Roles);
            localStorage.setItem('FirstName', event.body.FirstName);
            localStorage.setItem('LastName', event.body.LastName);
          }
          return event;
        }),
      );
    } else {
      return newRequest.handle(request);
    }
  }
}
