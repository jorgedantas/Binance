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
var anexo01_component_1 = require('../anexos/anexo01/anexo01.component');
var anexo02_component_1 = require('../anexos/anexo02/anexo02.component');
var anexo06_component_1 = require('../anexos/anexo06/anexo06.component');
var TestModule = (function () {
    function TestModule() {
    }
    TestModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                anexo01_component_1.Anexo01Component,
                anexo02_component_1.Anexo02Component,
                anexo06_component_1.Anexo06Component
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TestModule);
    return TestModule;
}());
exports.TestModule = TestModule;
//# sourceMappingURL=anexos.module.js.map