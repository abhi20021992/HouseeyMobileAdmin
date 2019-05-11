import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService, AppConstants } from '../configration/config.service';
import { Router } from '@angular/router';
import { RegisterUser, UserDetails } from '../../models/User';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private config: ConfigurationService,
    private constants: AppConstants,
    private router: Router,
    private commonService: CommonService,
  ) {}

  register(user: RegisterUser) {
    this.http
      .post<RegisterUser>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}/api/user`, user)
      .subscribe((result) => {
        this.commonService.showNotification('top', 'center', 'success', 'User registered please check email to verify');
        this.router.navigate(['/login']);
      });
  }

  details() {
    return this.http
      .get<UserDetails>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}/api/user/details`)
      .pipe((result) => {
        return result;
      });
  }
}
