import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule, routedComponents } from './leads-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbDialogModule } from '@nebular/theme';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { SelectColumnDialogComponent } from './components/select-column-dialog/select-column-dialog.component';
import { LeadHistoryComponent } from './components/lead-history/lead-history.component';

const ENTRY_COMPONENTS = [EditDialogComponent, SelectColumnDialogComponent, LeadHistoryComponent];
const COMPONENTS = [EditDialogComponent, SelectColumnDialogComponent, LeadHistoryComponent];

@NgModule({
  declarations: [...routedComponents, ...COMPONENTS],
  imports: [CommonModule, LeadsRoutingModule, Ng2SmartTableModule, NbCardModule, NbDialogModule.forChild()],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class LeadsModule {}
