"use strict";
var router_1 = require('@angular/router');
var LoginComponent = require('@tcecommon/login').LoginComponent;
var AutenticarComponent = require('@tcecommon/autenticar').AutenticarComponent;
var EsqueciSenhaComponent = require('@tcecommon/esqueci-senha').EsqueciSenhaComponent;
var ROUTES = [
    { path: 'dashboard', loadChildren: './app/dashboard/dashboard.module#DashboardModule' },
    {
        path: 'login', children: [
            {
                path: '', component: LoginComponent, children: [
                    { path: '', component: AutenticarComponent },
                    { path: 'esqueci-senha', component: EsqueciSenhaComponent },
                ]
            }
        ]
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
exports.Routing = router_1.RouterModule.forRoot(ROUTES);
//# sourceMappingURL=app.routing.js.map