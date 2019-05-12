import { Injectable } from '@angular/core';

export const APP_CONFIG = {
  ServiceEndPoints: {
    userServiceURL: 'http://privuatabhi.houseey.co/',
    leadService: '',
  },
  clientId: 'aG91c2V5LW1vYmlsZS1hcHA',
  clientSecret: 'aG91c2VleS1jbGllbnQtc2VjcmV',
  app: 'Angular',
  appLogo: 'Angular',
  appLogoIconURL: 'http://Angular.io',
  maxColumnsAllowed: 10,
  leadStatus: [
    { Id: '1', name: 'Active' },
    {
      Id: '0',
      name: 'Inactive',
    },
  ],
  adminRoleGroup: ['Admin', 'Roles: string'],
  defaultUserRole: 'Regular',
  loginErrorMessage: 'Server error not able to login contact admin',
};

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  constructor() {}
  getEndPoint(key: string) {
    return APP_CONFIG.ServiceEndPoints[key];
  }

  getInfo(key: string) {
    return APP_CONFIG[key];
  }
}

export class AppConstants {
  public USER_SERVICE_URL = 'userServiceURL';
  public APP_NAME = 'app';
  public APP_LOGO = 'appLogo';
  public APP_LOGO_URL = 'appLogoIconURL';
  public MAX_ALLOWED_COLUMNS = 'maxColumnsAllowed';
  public LEAD_STATUS = 'leadStatus';
  public ADMIN_ROLE_GROUP = 'adminRoleGroup';
  public DEFAULT_USER_ROLE = 'defaultUserRole';
}
