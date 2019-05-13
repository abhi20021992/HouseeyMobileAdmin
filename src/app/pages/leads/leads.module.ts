import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule, routedComponents } from './leads-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbDialogModule, NbSpinnerModule, NbSelectModule } from '@nebular/theme';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { SelectColumnDialogComponent } from './components/select-column-dialog/select-column-dialog.component';
import { LeadHistoryComponent } from './components/lead-history/lead-history.component';
import { ReactiveFormsModule } from '@angular/forms';

const ENTRY_COMPONENTS = [EditDialogComponent, SelectColumnDialogComponent, LeadHistoryComponent];
const COMPONENTS = [EditDialogComponent, SelectColumnDialogComponent, LeadHistoryComponent];
const MODULES = [
  CommonModule,
  LeadsRoutingModule,
  Ng2SmartTableModule,
  NbCardModule,
  NbSpinnerModule,
  NbDialogModule.forChild(),
  NbSelectModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: [...routedComponents, ...COMPONENTS],
  imports: [...MODULES],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class LeadsModule {}
