/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { Token } from '../app/@core/models/User';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppConstants, ConfigurationService, APP_CONFIG } from './@core/services/configration/config.service';
import { HttpInterceptorService } from './interceptors/HttpInterceptor';
import { ErrorInterceptorService } from './interceptors/ErrorInterceptor';
import { AuthorizationCheckService } from './interceptors/authorizationCheck';
import { AuthenticationService } from './@core/services/authentication/appAuthentication.service';
import {
  NbAuthModule,
  NbAuthStrategy,
  NbPasswordAuthStrategy,
  NbTokenLocalStorage,
  NbAuthSimpleToken,
} from '@nebular/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          refreshToken: true,
          baseEndpoint: APP_CONFIG.ServiceEndPoints.userServiceURL,
          token: {
            key: 'access_token',
          },
          login: {
            endpoint: 'oauth/token',
            method: 'POST',
            defaultErrors: ['Login failed', 'Check user name and password'],
            redirect: {
              success: '/pages/dashboard',
            },
          },
          register: {
            endpoint: '/api/user',
            method: 'POST',
          },
          requestPass: {
            endpoint: '/api/password',
            method: 'GET',
          },
          resetPass: {
            endpoint: '/api/password',
            method: 'POST',
          },
        }),
      ],
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AppConstants,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    AuthorizationCheckService,
    AuthenticationService,
    ConfigurationService,
  ],
})
export class AppModule {}
