import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { assign } from 'lodash';
import { stringify } from 'query-string';
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header to request

    //Get Token data from local storage
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

    return newRequest.handle(request);
  }
}
