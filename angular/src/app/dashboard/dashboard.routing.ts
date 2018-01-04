import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

// var ProfileComponent = require('@tcecommon/dashboard-profile').ProfileComponent;

const DASHBOARD_ROUTES: Routes = [
  { path: '', component: DashboardComponent }
];

export const DashboardRouting = RouterModule.forChild(DASHBOARD_ROUTES);
