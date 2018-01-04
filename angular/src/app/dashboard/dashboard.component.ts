import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

var AbasServiceCommon = require('@tcecommon/abas-service-service').AbasServiceService;
let PageViewDirective = require('@tcecommon/page-view-directive').PageViewDirective;

import { TabsComponents } from '../anexos/tabs.components';

import { Services } from '../shared/services/service.service';

declare var $: any;
declare var moment: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './app/dashboard/dashboard.component.html',
    entryComponents: TabsComponents
})

export class DashboardComponent implements OnInit {
    tabs: any;
    sistemas: any;
    sistemaAtual: any;
    sistemaLogin: any;
    abas: any[] = [];
    components: any[] = TabsComponents;

    @Input() menu: Array<{ title: any, url: any, activeRoute: any, icon: any, submenu: any }>;

    @ViewChild(PageViewDirective) pageView: any;


    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private router: Router,
        private Services: Services
    ) { }

    logout() {
        window.sessionStorage.clear();
        window.localStorage.clear();
        this.router.navigateByUrl('/login');
    }

    ngOnInit() {
        this.abas = [];
        /* SET SISTEMA SELECIONADO INICIALMENTE */
        window.sessionStorage.setItem('sistemaLogin', 'Contas de Governo');

        /* CHECK SISTEMA OFFLINE */
        if (window.localStorage.getItem('offline_system')) {
            /* SET USUARIO DE SISTEMA OFFLINE SEM AUTENTICAÇÃO */
            window.sessionStorage.setItem('informacoes_usuario', '{"CPF": "00000000000", "NomePessoaFisica": "SIAI Analise"}')
            this.Services.getFile('../app/assets/json/sistemas.json')
                .then(res => {
                    $('#loading').fadeOut();
                    this.sistemas = res;
                    window.sessionStorage.setItem('sistemas', JSON.stringify(res));
                })

        } else
            if (window.sessionStorage.getItem('access_token') || window.localStorage.getItem('access_token')) {
                $('#loading').fadeOut();
                this.sistemas = JSON.parse(window.sessionStorage.getItem('sistemas'));
            } else {
                return this.logout();
            }

    }

    handleAddTab(aba: any) {
        let AbasService = new AbasServiceCommon();
        let component = this.components.find(x => x.name === aba.component);
        AbasService.addTab(this.abas, aba, this.pageView, component, this._componentFactoryResolver);
    }
}