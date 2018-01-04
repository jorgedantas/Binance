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
var ng2_device_detector_1 = require('ng2-device-detector');
var AppComponent = (function () {
    function AppComponent(deviceService) {
        this.deviceService = deviceService;
        this.deviceInfo = null;
    }
    AppComponent.prototype.epicFunction = function () {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        if (this.deviceInfo.browser == "chrome" && this.deviceInfo.browser_version < "45.0.2454.85") {
            swal("Versão do Navegador", "A versão do chrome não é compatível com a aplicação, entre em contato com o suporte da DIN.", "error");
        }
        window.localStorage.setItem('offline_system', 'true');
    };
    AppComponent.prototype.ngOnInit = function () {
        this.epicFunction();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app/app.component.html',
            styleUrls: ['./app/app.component.scss']
        }), 
        __metadata('design:paramtypes', [ng2_device_detector_1.Ng2DeviceService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map