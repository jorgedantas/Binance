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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var dashboard_component_1 = require('./dashboard.component');
var dashboard_routing_1 = require('./dashboard.routing');
var SharedCommonModule = require('@tcecommon/shared-module-common').SharedCommonModule;
var AbasServiceService = require('@tcecommon/abas-service-service').AbasServiceService;
var HeaderComponent = require('@tcecommon/header').HeaderComponent;
var MenuSideComponent = require('@tcecommon/menu-side').MenuSideComponent;
var MenuModulosPaginasComponent = require('@tcecommon/menu-modulos-paginas').MenuModulosPaginasComponent;
var RelogarComponent = require("@tcecommon/relogar").RelogarComponent;
var anexos_module_1 = require('../anexos/anexos.module');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                dashboard_routing_1.DashboardRouting,
                SharedCommonModule,
                anexos_module_1.TestModule
            ],
            declarations: [
                MenuSideComponent,
                HeaderComponent,
                dashboard_component_1.DashboardComponent,
                MenuModulosPaginasComponent,
                RelogarComponent
            ],
            exports: [
                dashboard_component_1.DashboardComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map