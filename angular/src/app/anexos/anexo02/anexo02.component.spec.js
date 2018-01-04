"use strict";
var testing_1 = require('@angular/core/testing');
var anexo02_component_1 = require('./anexo02.component');
describe('Anexo02Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [anexo02_component_1.Anexo02Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(anexo02_component_1.Anexo02Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=anexo02.component.spec.js.map