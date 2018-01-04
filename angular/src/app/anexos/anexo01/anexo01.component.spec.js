"use strict";
var testing_1 = require('@angular/core/testing');
var anexo01_component_1 = require('./anexo01.component');
describe('Anexo01Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [anexo01_component_1.Anexo01Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(anexo01_component_1.Anexo01Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=anexo01.component.spec.js.map