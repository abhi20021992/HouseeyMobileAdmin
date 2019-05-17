import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadsComponent } from './leads.component';
import { ViewLeadsComponent } from './view-leads/view-leads.component';

const routes: Routes = [
  {
    path: '',
    component: LeadsComponent,
    children: [
      {
        path: 'view',
        component: ViewLeadsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadsRoutingModule {}

export const routedComponents = [LeadsComponent, ViewLeadsComponent];
