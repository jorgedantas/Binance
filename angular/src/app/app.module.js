"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var ng2_device_detector_1 = require('ng2-device-detector');
var SharedCommonModule = require('@tcecommon/shared-module-common').SharedCommonModule;
var AbasServiceService = require('@tcecommon/abas-service-service').AbasServiceService;
var AutenticacaoService = require('@tcecommon/autenticacao-service').AutenticacaoService;
var MasksService = require('@tcecommon/masks-service').MasksService;
var MessageAlertsService = require('@tcecommon/message-alerts-service').MessageAlertsService;
var ReportsService = require('@tcecommon/reports-service').ReportsService;
var LoginComponent = require('@tcecommon/login').LoginComponent;
var AutenticarComponent = require('@tcecommon/autenticar').AutenticarComponent;
var EsqueciSenhaComponent = require('@tcecommon/esqueci-senha').EsqueciSenhaComponent;
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var service_service_1 = require('./shared/services/service.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                SharedCommonModule,
                http_1.HttpModule,
                app_routing_1.Routing,
                ng2_device_detector_1.Ng2DeviceDetectorModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                LoginComponent,
                AutenticarComponent,
                EsqueciSenhaComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                AbasServiceService,
                AutenticacaoService,
                MasksService,
                MessageAlertsService,
                ReportsService,
                service_service_1.Services,
                {
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                },
                {
                    provide: core_1.LOCALE_ID,
                    useValue: "pt-BR"
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map