import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthorizationCheckService } from '../interceptors/authorizationCheck';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: ECommerceComponent,
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'iot-dashboard',
        component: DashboardComponent,
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'ui-features',
        loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'modal-overlays',
        loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'extra-components',
        loadChildren: './extra-components/extra-components.module#ExtraComponentsModule',
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'bootstrap',
        loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule',
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule',
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'editors',
        loadChildren: './editors/editors.module#EditorsModule',
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'forms',
        loadChildren: './forms/forms.module#FormsModule',
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule',
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'miscellaneous',
        loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
        canActivate: [AuthorizationCheckService],
      },
      {
        path: 'leads',
        loadChildren: './leads/leads.module#LeadsModule',
        canActivate: [AuthorizationCheckService],
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
