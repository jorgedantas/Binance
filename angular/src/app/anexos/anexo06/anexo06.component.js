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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var service_service_1 = require('./../../shared/services/service.service');
var core_1 = require('@angular/core');
var Anexo06Component = (function () {
    function Anexo06Component(Services, router, routeUrl, http) {
        this.Services = Services;
        this.router = router;
        this.routeUrl = routeUrl;
        this.http = http;
    }
    Anexo06Component.prototype.ngOnInit = function () {
        var _this = this;
        this.Services.getFile('./app/assets/json/anexo2.json')
            .then(function (res) {
            _this.anexo = res[0].nomeAnexo;
            _this.tabela = res[0].tabelas[0].nomeTabela;
            _this.colunas = res[0].tabelas[0].colunas;
            _this.linhas = res[0].tabelas[0].linhas.map(function (l) {
                return l.linha;
            }).filter(function (v, i, s) {
                return s.indexOf(v) === i;
            }).map(function (l) {
                return res[0].tabelas[0].linhas.filter(function (l2) { return l2.linha == l; });
            });
        });
    };
    Anexo06Component = __decorate([
        core_1.Component({
            selector: 'app-anexo02',
            templateUrl: './app/anexos/anexo06/anexo06.component.html',
            providers: [service_service_1.Services]
        }), 
        __metadata('design:paramtypes', [service_service_1.Services, router_1.Router, router_1.ActivatedRoute, http_1.Http])
    ], Anexo06Component);
    return Anexo06Component;
}());
exports.Anexo06Component = Anexo06Component;
//# sourceMappingURL=anexo06.component.js.map