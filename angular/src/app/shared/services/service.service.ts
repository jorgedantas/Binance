import { Injectable } from '@angular/core';
import { Http, Response, Headers, BrowserXhr } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

var MessageAlertsCommon = require('@tcecommon/message-alerts-service').MessageAlertsService;

declare var $: any;
declare var window: any;
declare var Promise: any;
declare var swal: any;

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Services extends BrowserXhr {

  constructor(
    private http: Http
  ) {
    super();
  }

  public build(): any {
    let xhr = super.build();
    xhr.responseType = "blob";
    return <any>(xhr);
  }

  getHeaders(): Headers {
    let headers = new Headers();
    let sessionToken = window.sessionStorage.getItem('access_token');
    let localToken = window.localStorage.getItem('access_token');
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Content-Type", "application/json");
    headers.append('Authorization', 'bearer ' + (sessionToken || localToken));
    return headers;
  }


  get(schema: string): Promise<any[]> {

    let headers = this.getHeaders();

    return Promise.resolve(this.http.get(environment.urlApi + schema, { headers: headers })
      .toPromise()
      .then((res) => {
        return JSON.parse(res.text())
      })
      .catch((res) => {
        this.msgRetorno(schema, res, 'get');
        return [];
      }));
  }

  getFile(address: string): Promise<any[]> {

    let headers = this.getHeaders();

    return Promise.resolve(this.http.get(address)
      .toPromise()
      .then((res) => {
        return JSON.parse(res.text())
      })
      .catch((res) => {
        this.msgRetorno(address, res, 'get');
        return [];
      }));
  }


  post(schema: string, body: any, files: any): Promise<any[]> {
    let headers = this.getHeaders();

    return Promise.resolve(this.http.post(environment.urlApi + schema, body, { headers: headers })
      .toPromise()
      .then((res) => {
        this.msgRetorno(schema, res, 'post');
        return JSON.parse(res.text())
      })
      .catch((res) => {
        console.log(res);
        this.msgRetorno(schema, res, 'post');
        return [];
      })
    );
  }

  put(schema: string, body: any, id: any): Promise<any[]> {
    let headers = this.getHeaders();

    return Promise.resolve(this.http.put(environment.urlApi + schema + "/" + id, body, { headers: headers })
      .toPromise()
      .then((res) => {
        this.msgRetorno(schema, res, 'put');
        return JSON.parse(res.text())
      })
      .catch((res) => {
        console.log(res);
        this.msgRetorno(schema, res, 'put');
        return [];
      })
    );
  }

  delete(schema: string, id: any): Promise<any[]> {
    let headers = this.getHeaders();

    return Promise.resolve(this.http.delete(environment.urlApi + schema + "/" + id, { headers: headers })
      .toPromise()
      .then((res) => {
        this.msgRetorno(schema, res, 'delete');
        return JSON.parse(res.text())
      })
      .catch((res) => {
        console.log(res);
        this.msgRetorno(schema, res, 'delete');
        return [];
      })
    );
  }

  msgRetorno(schema: string, res: any, method: string): any {
    var str: string;
    var typeMessage: string;

    if (res.status == 200) {
      typeMessage = 'success'
      switch (method) {
        case 'post':
          str = 'Cadastro de ' + schema.toLocaleUpperCase() + ' realizado com sucesso'
          break;
        case 'put':
          str = 'Atualização de ' + schema.toLocaleUpperCase() + ' realizada com sucesso'
          break;
        case 'delete':
          str = 'Exclusão de ' + schema.toLocaleUpperCase() + ' realizada com sucesso'
          break;
      }
    } else {
      switch (res.status) {
        case 400:
          typeMessage = 'warning'
          str = JSON.parse(res.text()).strMessage.toLocaleUpperCase()
          break;
        case 401:
          typeMessage = 'error'
          str = 'Operação não autorizada'
          break;
        case 403:
          typeMessage = 'error'
          str = 'Acesso negado'
          break;
        case 404:
          typeMessage = 'warning'
          str = 'Rota de aplicação não disponível'
          break;
        case 406:
          typeMessage = 'warning'
          str = 'Dados não validos'
          break;
        case 500:
          typeMessage = 'warning'
          str = 'Erro interno da aplicação'
          break;
        default:
          typeMessage = 'warning'
          str = 'Problema ao carregar, contate o nosso suporte. ' + schema.toLocaleUpperCase();
          break;

      }
    }
    let MessageAlertsService = new MessageAlertsCommon();
    MessageAlertsService.customMessage('', str, typeMessage);
  }
}