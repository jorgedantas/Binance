"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
var environment_1 = require('../../environments/environment');
var MessageAlertsCommon = require('@tcecommon/message-alerts-service').MessageAlertsService;
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var Services = (function (_super) {
    __extends(Services, _super);
    function Services(http) {
        _super.call(this);
        this.http = http;
    }
    Services.prototype.build = function () {
        var xhr = _super.prototype.build.call(this);
        xhr.responseType = "blob";
        return (xhr);
    };
    Services.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        var sessionToken = window.sessionStorage.getItem('access_token');
        var localToken = window.localStorage.getItem('access_token');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Content-Type", "application/json");
        headers.append('Authorization', 'bearer ' + (sessionToken || localToken));
        return headers;
    };
    Services.prototype.get = function (schema) {
        var _this = this;
        var headers = this.getHeaders();
        return Promise.resolve(this.http.get(environment_1.environment.urlApi + schema, { headers: headers })
            .toPromise()
            .then(function (res) {
            return JSON.parse(res.text());
        })
            .catch(function (res) {
            _this.msgRetorno(schema, res, 'get');
            return [];
        }));
    };
    Services.prototype.getFile = function (address) {
        var _this = this;
        var headers = this.getHeaders();
        return Promise.resolve(this.http.get(address)
            .toPromise()
            .then(function (res) {
            return JSON.parse(res.text());
        })
            .catch(function (res) {
            _this.msgRetorno(address, res, 'get');
            return [];
        }));
    };
    Services.prototype.post = function (schema, body, files) {
        var _this = this;
        var headers = this.getHeaders();
        return Promise.resolve(this.http.post(environment_1.environment.urlApi + schema, body, { headers: headers })
            .toPromise()
            .then(function (res) {
            _this.msgRetorno(schema, res, 'post');
            return JSON.parse(res.text());
        })
            .catch(function (res) {
            console.log(res);
            _this.msgRetorno(schema, res, 'post');
            return [];
        }));
    };
    Services.prototype.put = function (schema, body, id) {
        var _this = this;
        var headers = this.getHeaders();
        return Promise.resolve(this.http.put(environment_1.environment.urlApi + schema + "/" + id, body, { headers: headers })
            .toPromise()
            .then(function (res) {
            _this.msgRetorno(schema, res, 'put');
            return JSON.parse(res.text());
        })
            .catch(function (res) {
            console.log(res);
            _this.msgRetorno(schema, res, 'put');
            return [];
        }));
    };
    Services.prototype.delete = function (schema, id) {
        var _this = this;
        var headers = this.getHeaders();
        return Promise.resolve(this.http.delete(environment_1.environment.urlApi + schema + "/" + id, { headers: headers })
            .toPromise()
            .then(function (res) {
            _this.msgRetorno(schema, res, 'delete');
            return JSON.parse(res.text());
        })
            .catch(function (res) {
            console.log(res);
            _this.msgRetorno(schema, res, 'delete');
            return [];
        }));
    };
    Services.prototype.msgRetorno = function (schema, res, method) {
        var str;
        var typeMessage;
        if (res.status == 200) {
            typeMessage = 'success';
            switch (method) {
                case 'post':
                    str = 'Cadastro de ' + schema.toLocaleUpperCase() + ' realizado com sucesso';
                    break;
                case 'put':
                    str = 'Atualização de ' + schema.toLocaleUpperCase() + ' realizada com sucesso';
                    break;
                case 'delete':
                    str = 'Exclusão de ' + schema.toLocaleUpperCase() + ' realizada com sucesso';
                    break;
            }
        }
        else {
            switch (res.status) {
                case 400:
                    typeMessage = 'warning';
                    str = JSON.parse(res.text()).strMessage.toLocaleUpperCase();
                    break;
                case 401:
                    typeMessage = 'error';
                    str = 'Operação não autorizada';
                    break;
                case 403:
                    typeMessage = 'error';
                    str = 'Acesso negado';
                    break;
                case 404:
                    typeMessage = 'warning';
                    str = 'Rota de aplicação não disponível';
                    break;
                case 406:
                    typeMessage = 'warning';
                    str = 'Dados não validos';
                    break;
                case 500:
                    typeMessage = 'warning';
                    str = 'Erro interno da aplicação';
                    break;
                default:
                    typeMessage = 'warning';
                    str = 'Problema ao carregar, contate o nosso suporte. ' + schema.toLocaleUpperCase();
                    break;
            }
        }
        var MessageAlertsService = new MessageAlertsCommon();
        MessageAlertsService.customMessage('', str, typeMessage);
    };
    Services = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Services);
    return Services;
}(http_1.BrowserXhr));
exports.Services = Services;
//# sourceMappingURL=service.service.js.map