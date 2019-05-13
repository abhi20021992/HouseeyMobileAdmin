import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadsComponent } from './leads.component';
import { ViewLeadsComponent } from './view-leads/view-leads.component';
import { AddLeadComponent } from './add-lead/add-lead.component';

const routes: Routes = [
  {
    path: '',
    component: LeadsComponent,
    children: [
      {
        path: 'view',
        component: ViewLeadsComponent,
      },
      {
        path: 'create',
        component: AddLeadComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadsRoutingModule {}

export const routedComponents = [LeadsComponent, ViewLeadsComponent, AddLeadComponent];
