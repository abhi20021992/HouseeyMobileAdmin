import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { LeadService } from '../../../@core/services/leadmanagement/lead.service';
import { Lead, LeadType } from '../../../@core/models/Lead';
import { CommonService } from '../../../@core/services/common/common.service';
import { pick } from 'lodash';
import { NbDialogService } from '@nebular/theme';
import { EditDialogComponent } from '../components/edit-dialog/edit-dialog.component';
import { SelectColumnDialogComponent } from '../components/select-column-dialog/select-column-dialog.component';

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
    private commonService: CommonService,
    private dialogService: NbDialogService,
  ) {
    this.leadService.getAllLeads().subscribe((leads) => {
      this.leadData = leads;
      if (leads.length > 0) {
        Object.keys(leads[0]).map((column) => {
          this.columns[column] = {
            title: this.commonService.getDisplayName(column),
          };
        });
      }
      this.settings.columns = this.getColumnsToDisplay();
      this.source.load(this.leadData);
    });
  }

  ngOnInit() {}

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEdit(event) {
    this.dialogService.open(EditDialogComponent, {
      context: {},
    });
  }

  onColumnChange(event) {
    this.dialogService.open(SelectColumnDialogComponent, {
      context: {},
    });
  }

  getColumnsToDisplay() {
    return pick(this.columns, ['FirstName', 'LastName']);
  }
}
