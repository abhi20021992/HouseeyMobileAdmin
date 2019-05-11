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
          this.commonService.showNotification('top', 'center', 'error', 'Login failed. Check user name or password');
          //if 401 response returned from api, logout from application & redirect to login page.
          this.authenticationService.logout();
          sessionStorage.clear();
          this.router.navigate(['/', '']);
        } else if (err.status === 0) {
          this.commonService.showNotification('top', 'center', 'warning', 'Server down.');
        } else if (err.status === 400) {
          this.commonService.showNotification('top', 'center', 'danger', err.error ? err.error.error : err.message);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      }),
    );
  }
}
