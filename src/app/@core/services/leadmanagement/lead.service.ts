import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConfigurationService, AppConstants } from '../configration/config.service';
import { Lead, LeadConfig, LeadNote, LeadSiteVisit, LeadSMS, LeadEmail, LeadHistory } from '../../models/Lead';
import { CommonService } from '../common/common.service';
import { chain, groupBy } from 'lodash';

@Injectable()
export class LeadService {
  constructor(
    private http: HttpClient,
    private config: ConfigurationService,
    private constants: AppConstants,
    private commonService: CommonService,
  ) {}

  getAllLeads() {
    return this.http.get<Lead[]>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}api/leads`).pipe(
      map((leads) => {
        return leads;
      }),
    );
  }

  getLeadConfig() {
    return this.http.get<LeadConfig>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}api/config`).pipe(
      map((config) => {
        return config;
      }),
    );
  }

  save(value: Lead) {
    return this.http
      .put<any>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}api/leads/${value.Id}`, value)
      .subscribe((x) => {
        this.commonService.showNotification(`Lead with name ${value.FirstName} updated`, 'success', true);
        return true;
      });
  }

  create(value: Lead) {
    return this.http
      .post<any>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}api/leads`, value)
      .subscribe((x) => {
        this.commonService.showNotification('top', 'center', 'success', 'Lead created successfully.');
        return true;
      });
  }

  addNote(note: LeadNote) {
    return this.http
      .post<LeadNote>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}api/leads/note`, note)
      .subscribe((x) => {
        this.commonService.showNotification('top', 'center', 'success', 'Notes added to the lead');
        return true;
      });
  }

  addSiteVisit(visit: LeadSiteVisit) {
    return this.http
      .post<LeadSiteVisit>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}api/leads/visit`, visit)
      .subscribe((x) => {
        this.commonService.showNotification('top', 'center', 'success', 'Visit scheduled for the lead');
        return true;
      });
  }

  sendSMS(sms: LeadSMS) {
    return this.http
      .post<LeadSMS>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}api/leads/sms`, sms)
      .subscribe((x) => {
        this.commonService.showNotification('top', 'center', 'success', 'Visit scheduled for the lead');
        return true;
      });
  }

  sendEmail(email: LeadEmail) {
    return this.http
      .post<LeadEmail>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}api/leads/email`, email)
      .subscribe((x) => {
        this.commonService.showNotification('top', 'center', 'success', 'Visit scheduled for the lead');
        return true;
      });
  }

  history(leadId: string) {
    return this.http
      .get<LeadHistory[]>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}api/leads/history?id=${leadId}`)
      .pipe(
        map((leads) => {
          return groupBy(leads, 'Type');
        }),
      );
  }

  changeFavorite(lead: Lead) {
    return this.http
      .patch<LeadHistory[]>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}api/leads/favorite`, lead)
      .pipe(
        map((response) => {
          return response;
        }),
      );
  }
  columns() {
    return [
      'Name',
      'LeadStage',
      'ProjectName',
      'Email',
      'Phone',
      'Location',
      'Budget',
      'Possession',
      'CreatedOn',
      'LeadOwner',
      'LeadStatus',
      'NoofBedRoom',
      'Mobile',
      'Address',
      'LeadSource',
      'Company',
      'Website',
      'Size',
      'Favourite',
      'PropertyType',
      'PropertyAge',
      'Furnished',
      'Vastu',
      'Preference',
      'City',
      'Type',
      'CreatedBy',
      'ModifiedBy',
      'Id',
      'ModifiedOn',
      'IsDeleted',
      'DeletedOn',
    ];
  }
}
