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

export class LeadType {
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

export const VALIDATION_MESSAGE = {
  FirstName: [
    {
      empty: `Please provide first name.`,
    },
  ],
  LastName: [
    {
      empty: `Please provide last name.`,
    },
  ],
  Email: [
    {
      empty: `Please provide email.`,
    },
  ],
  Phone: [
    {
      empty: `Please provide phone.`,
    },
  ],
  Mobile: [
    {
      empty: `Please provide mobile.`,
      invalidInput: `Please provide a valid phone`,
    },
  ],
  Address: [
    {
      empty: `Please provide address.`,
    },
  ],
  LeadStage: [
    {
      empty: `Please provide lead stage.`,
    },
  ],
  LeadSource: [
    {
      empty: `Please provide lead source.`,
    },
  ],
  LeadStatus: [
    {
      empty: `Please provide lead status.`,
    },
  ],
  ProjectName: [
    {
      empty: `Please provide project name.`,
    },
  ],
  Company: [
    {
      empty: `Please provide company.`,
    },
  ],
  Website: [
    {
      empty: `Please provide website.`,
    },
  ],
  NoofBedRoom: [
    {
      empty: `Please provide no of bed rooms.`,
    },
  ],
  NoofKitchen: [
    {
      empty: `Please provide no of kitchen.`,
    },
  ],
  Location: [
    {
      empty: `Please provide location.`,
    },
  ],
  Budget: [
    {
      empty: `Please provide budget.`,
    },
  ],
  Possession: [
    {
      empty: `Please provide possession.`,
    },
  ],
  Size: [
    {
      empty: `Please provide size.`,
    },
  ],
  PropertyType: [
    {
      empty: `Please provide property type.`,
    },
  ],
  PropertyAge: [
    {
      empty: `Please provide property age.`,
    },
  ],
  Furnished: [
    {
      empty: `Please provide furnished.`,
    },
  ],
  Vastu: [
    {
      empty: `Please provide vastu.`,
    },
  ],
  Preference: [
    {
      empty: `Please provide preference.`,
    },
  ],
  City: [
    {
      empty: `Please provide city.`,
    },
  ],
  Type: [
    {
      empty: `Please provide type.`,
    },
  ],
  LeadOwner: [
    {
      empty: `Please provide lead owner.`,
    },
  ],
};

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
