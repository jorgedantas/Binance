import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

var LoginComponent = require('@tcecommon/login').LoginComponent;
var AutenticarComponent = require('@tcecommon/autenticar').AutenticarComponent;
var EsqueciSenhaComponent = require('@tcecommon/esqueci-senha').EsqueciSenhaComponent;

const ROUTES: Routes = [
  { path: 'dashboard', loadChildren: './app/dashboard/dashboard.module#DashboardModule' },
  {
    path: 'login', children: [
      {
        path: '', component: LoginComponent, children: [
          { path: '', component: AutenticarComponent },
          { path: 'esqueci-senha', component: EsqueciSenhaComponent },
        ]
      }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

export const Routing = RouterModule.forRoot(ROUTES);  