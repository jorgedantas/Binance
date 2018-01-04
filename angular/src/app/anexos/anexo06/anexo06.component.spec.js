"use strict";
var testing_1 = require('@angular/core/testing');
var anexo06_component_1 = require('./anexo06.component');
describe('Anexo06Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [anexo06_component_1.Anexo06Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(anexo06_component_1.Anexo06Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=anexo06.component.spec.js.map