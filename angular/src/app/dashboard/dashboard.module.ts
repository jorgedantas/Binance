import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';

var SharedCommonModule = require('@tcecommon/shared-module-common').SharedCommonModule;

var AbasServiceService = require('@tcecommon/abas-service-service').AbasServiceService;

var HeaderComponent = require('@tcecommon/header').HeaderComponent;
var MenuSideComponent = require('@tcecommon/menu-side').MenuSideComponent;
var MenuModulosPaginasComponent = require('@tcecommon/menu-modulos-paginas').MenuModulosPaginasComponent;

var RelogarComponent = require("@tcecommon/relogar").RelogarComponent;
// var ProfileComponent = require('@tcecommon/dashboard-profile').ProfileComponent;

import { TestModule } from '../anexos/anexos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRouting,
    SharedCommonModule,
    TestModule
  ],
  declarations: [
    MenuSideComponent,
    HeaderComponent,
    DashboardComponent,
    // ProfileComponent,
    MenuModulosPaginasComponent,
    RelogarComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
