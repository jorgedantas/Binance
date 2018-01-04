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
var router_1 = require('@angular/router');
var AbasServiceCommon = require('@tcecommon/abas-service-service').AbasServiceService;
var PageViewDirective = require('@tcecommon/page-view-directive').PageViewDirective;
var tabs_components_1 = require('../anexos/tabs.components');
var service_service_1 = require('../shared/services/service.service');
var DashboardComponent = (function () {
    function DashboardComponent(_componentFactoryResolver, router, Services) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this.router = router;
        this.Services = Services;
        this.abas = [];
        this.components = tabs_components_1.TabsComponents;
    }
    DashboardComponent.prototype.logout = function () {
        window.sessionStorage.clear();
        window.localStorage.clear();
        this.router.navigateByUrl('/login');
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.abas = [];
        window.sessionStorage.setItem('sistemaLogin', 'Contas de Governo');
        if (window.localStorage.getItem('offline_system')) {
            window.sessionStorage.setItem('informacoes_usuario', '{"CPF": "00000000000", "NomePessoaFisica": "SIAI Analise"}');
            this.Services.getFile('../app/assets/json/sistemas.json')
                .then(function (res) {
                $('#loading').fadeOut();
                _this.sistemas = res;
                window.sessionStorage.setItem('sistemas', JSON.stringify(res));
            });
        }
        else if (window.sessionStorage.getItem('access_token') || window.localStorage.getItem('access_token')) {
            $('#loading').fadeOut();
            this.sistemas = JSON.parse(window.sessionStorage.getItem('sistemas'));
        }
        else {
            return this.logout();
        }
    };
    DashboardComponent.prototype.handleAddTab = function (aba) {
        var AbasService = new AbasServiceCommon();
        var component = this.components.find(function (x) { return x.name === aba.component; });
        AbasService.addTab(this.abas, aba, this.pageView, component, this._componentFactoryResolver);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DashboardComponent.prototype, "menu", void 0);
    __decorate([
        core_1.ViewChild(PageViewDirective), 
        __metadata('design:type', Object)
    ], DashboardComponent.prototype, "pageView", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './app/dashboard/dashboard.component.html',
            entryComponents: tabs_components_1.TabsComponents
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, router_1.Router, service_service_1.Services])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map