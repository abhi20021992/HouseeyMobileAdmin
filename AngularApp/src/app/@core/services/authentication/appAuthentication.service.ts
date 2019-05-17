import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConstants, ConfigurationService } from '../configration/config.service';
import { User, Token } from '../../models/User';
import { indexOf } from 'lodash';
import { CommonService } from '../common/common.service';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isUserValid = false;
  constructor(
    private http: HttpClient,
    private config: ConfigurationService,
    private constants: AppConstants,
    private router: Router,
    private commonService: CommonService,
  ) {}

  isUserAuthenticated() {
    return sessionStorage.getItem('token') ? true : false;
  }

  login(UserData: User) {
    // tslint:disable-next-line: max-line-length
    const userInfo = `UserName=${UserData.UserName}&IsOnline=${UserData.IsOnline}&Password=${
      UserData.Password
    }&RememberMe=${UserData.RememberMe}&Email=${UserData.RememberMe}&client_id=${this.config.getInfo(
      'clientId',
    )}&client_secret=${this.config.getInfo('clientSecret')}&grant_type=password`;
    this.http
      .post<Token>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}/oauth/token`, userInfo)
      .subscribe((authResult) => {
        this.commonService.showNotification(`Login success full`, 'success', true);
        sessionStorage.setItem('token', authResult.access_token);
        sessionStorage.setItem('roles', authResult.Roles);
        sessionStorage.setItem('FirstName', authResult.FirstName);
        sessionStorage.setItem('LastName', authResult.LastName);
        sessionStorage.setItem('refreshtoken', authResult.refresh_token);
        this.router.navigate(['dashboard']);
      });
  }

  loginPage() {
    return this.http
      .post<any>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}/oauth/token`, { returnUrl: '' })
      .pipe(
        map((loginHtml) => {
          return loginHtml;
        }),
      );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  isAdminGroupUser() {
    return indexOf(this.config.getInfo(this.constants.ADMIN_ROLE_GROUP), sessionStorage.getItem('roles')) !== -1;
  }
}
