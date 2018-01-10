import { Injectable } from '@angular/core';
import { Http, Response, Headers, BrowserXhr } from '@angular/http';

@Injectable()
export class CursosService {

  constructor(
    private http: Http
  ) {
    
  }

  getCursos(){
    return ['Java', 'Ext JS', 'Angular'];
  }

  getHeaders(): Headers {
    let headers = new Headers();
    //let sessionToken = window.sessionStorage.getItem('access_token');
   // let localToken = window.localStorage.getItem('access_token');
   //headers.append("origin", "http://evil.com/");

    //headers.append("Access-Control-Allow-Headers:", "application/json");
    //headers.append("Content-type", "application/json");
    
   // headers.append("Content-Type", "application/json");
   // headers.append('Authorization', 'bearer ' + (sessionToken || localToken));
    return headers;
  }

  
  get(schema: string): Promise<any[]> {
    
        let headers = this.getHeaders();
       
        return Promise.resolve(this.http.get("https://api.binance.com" + schema)
          .toPromise()
          .then((res) => {
            return JSON.parse(res.text())
          })
          .catch((res) => {
            //this.msgRetorno(schema, res, 'get');
            console.log(res);
            return [];
          }));
      }
   

}
