import { initTransferState } from '@angular/platform-browser/src/browser/transfer_state';

export interface Lead {
  FirstName: string;
  LastName?: any;
  Email: string;
  Phone: string;
  Mobile?: any;
  Address?: any;
  LeadSource: number;
  LeadStage: number;
  LeadStatus: number;
  LeadOwner?: any;
  ProjectName: string;
  Company?: any;
  Website?: any;
  NoofBedRoom?: any;
  NoofKitchen?: any;
  Location?: any;
  Budget?: any;
  Possession?: any;
  Size?: any;
  Favourite: boolean;
  PropertyType: number;
  PropertyAge: number;
  Furnished: number;
  Vastu: number;
  Preference?: any;
  City?: any;
  Type?: any;
  CreatedBy?: any;
  ModifiedBy?: any;
  Id: number;
  CreatedOn: string;
  ModifiedOn?: any;
  IsDeleted: boolean;
  DeletedOn?: any;
  Name?: string;
}

export interface Leads {
  Leads: Lead[];
}

// export interface LeadData
// {
//     name: string
//     email: string
//     phone: string
//     description: string
//     ProjectName: string
//     LeadOwner: string
//     LeadStatus: string
// }
export interface LeadConfig {
  LeadSource: LeadMap[];
  LeadStage: LeadMap[];
  PropertyType: LeadMap[];
  PropertyAge: LeadMap[];
  Furnished: LeadMap[];
  Vastu: LeadMap[];
  LeadStatus: LeadMap[];
}

export interface LeadMap {
  name: string;
  value: string;
}

export interface LeadNote {
  note: string;
  leadId: string;
}

export interface LeadSiteVisit {
  LeadId: string;
  ActivityDesc: string;
  StartTime: string;
  EndTime: string;
  Date: string;
}

export interface LeadSMS {
  smsBody: string;
  leadId: string;
}

export interface LeadEmail {
  emailHtmlBodyTemplate: string;
  leadId: string;
}

export interface LeadHistory {
  LeadId: string;
  ActivityDesc: string;
  ModifiedBy: string;
  Type: string;
  Date: string;
  StartTime: string;
  EndTime: string;
}

export interface LeadHistoryList {
  LeadHistory: LeadHistory[];
}
