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

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppConstants, ConfigurationService, APP_CONFIG } from './@core/services/configration/config.service';
import { HttpInterceptorService } from './interceptors/HttpInterceptor';
import { ErrorInterceptorService } from './interceptors/ErrorInterceptor';
import { AuthorizationCheckService } from './interceptors/authorizationCheck';
import { AuthenticationService } from './@core/services/authentication/appAuthentication.service';
import { NbAuthModule, NbAuthStrategy, NbPasswordAuthStrategy } from '@nebular/auth';

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
          baseEndpoint: APP_CONFIG.ServiceEndPoints.userServiceURL,
          login: {
            endpoint: 'oauth/token',
            method: 'POST',
            defaultMessages: ['Login failed', 'Please provide correct user name and password'],
          },
          register: {
            endpoint: '/auth/sign-up',
            method: 'POST',
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'POST',
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
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
