import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

var SharedCommonModule = require('@tcecommon/shared-module-common').SharedCommonModule;

var AbasServiceService = require('@tcecommon/abas-service-service').AbasServiceService;
var AutenticacaoService = require('@tcecommon/autenticacao-service').AutenticacaoService;
var MasksService = require('@tcecommon/masks-service').MasksService;
var MessageAlertsService = require('@tcecommon/message-alerts-service').MessageAlertsService;
var ReportsService = require('@tcecommon/reports-service').ReportsService;

var LoginComponent = require('@tcecommon/login').LoginComponent;
var AutenticarComponent = require('@tcecommon/autenticar').AutenticarComponent;
var EsqueciSenhaComponent = require('@tcecommon/esqueci-senha').EsqueciSenhaComponent;

import { AppComponent } from './app.component';

import { Routing } from './app.routing';

import { Services } from './shared/services/service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedCommonModule,
    HttpModule,
    Routing,
    Ng2DeviceDetectorModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    AutenticarComponent,
    EsqueciSenhaComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AbasServiceService,
    AutenticacaoService,
    MasksService,
    MessageAlertsService,
    ReportsService,
    Services,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ]
})
export class AppModule { }
