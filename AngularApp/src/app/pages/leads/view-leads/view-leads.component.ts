import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { LeadService } from '../../../@core/services/leadmanagement/lead.service';
import { Lead, LeadType, LeadConfig } from '../../../@core/models/Lead';
import { CommonService } from '../../../@core/services/common/common.service';
import { pick } from 'lodash';
import { NbDialogService } from '@nebular/theme';

import { EditDialogComponent } from '../components/edit-dialog/edit-dialog.component';
import { AddDialogComponent } from '../components/add-dialog/add-dialog.component';

@Component({
  selector: 'ngx-view-leads',
  templateUrl: './view-leads.component.html',
  styleUrls: ['./view-leads.component.scss'],
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `,
  ],
})
export class ViewLeadsComponent implements OnInit {
  leadData: Lead[];
  columns = {};
  columnsToDisplay: [];
  loading = true;
  leadConfig: LeadConfig;
  allColumns: string[];
  settings = {
    mode: 'external',
    actions: {
      add: true,
      edit: true,
      delete: false,
    },
    add: {
      addButtonContent: '<i class="nb-gear"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: [],
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private leadService: LeadService,
    public commonService: CommonService,
    private dialogService: NbDialogService,
  ) {
    this.leadService.getLeadConfig().subscribe((config) => {
      this.leadConfig = config;
    });
    this.leadService.getAllLeads().subscribe((leads) => {
      this.leadData = leads;
      if (leads.length > 0) {
        this.allColumns = Object.keys(leads[0]);
        this.allColumns.map((column) => {
          this.columns[column] = {
            title: this.commonService.getDisplayName(column),
          };
        });
      }
      this.settings.columns = this.getColumnsToDisplay();
      this.source.load(this.leadData);
      this.loading = false;
    });
  }

  ngOnInit() {}

  onEdit(event) {
    this.dialogService
      .open(EditDialogComponent, {
        context: {
          data: event['data'],
          leadConfig: this.leadConfig,
        },
      })
      .onClose.subscribe((eventStatus) => {
        this.source.reset();
      });
  }

  onAdd() {
    this.dialogService
      .open(AddDialogComponent, {
        context: {
          leadConfig: this.leadConfig,
        },
      })
      .onClose.subscribe((eventStatus) => {
        this.source.reset();
      });
  }

  getColumnsToDisplay() {
    return pick(this.columns, ['FirstName', 'LastName']);
  }

  updateColumns(event) {
    console.log(event);
  }
}
