import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../@core/services/authentication/appAuthentication.service';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { CommonService } from '../@core/services/common/common.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private commonService: CommonService,
  ) {}

  intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {
    return newRequest.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401 || err.status == 403) {
          this.commonService.showNotification(`User registered please check email to verify`, 'danger', true);
          //if 401 response returned from api, logout from application & redirect to login page.
          this.authenticationService.logout();
          sessionStorage.clear();
          this.router.navigate(['/', 'auth/login']);
        } else if (err.status === 0) {
          this.commonService.showNotification(`Server down.`, 'danger', true);
        } else if (err.status === 400) {
          this.commonService.showNotification(err.error ? err.error.error : err.message, 'danger', true);
        }

        const error = err;
        return throwError(error);
      }),
    );
  }
}
