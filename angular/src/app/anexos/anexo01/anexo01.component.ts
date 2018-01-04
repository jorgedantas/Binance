import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Services } from './../../shared/services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anexo01',
  templateUrl: './app/anexos/anexo01/anexo01.component.html',
  providers: [Services]
})
export class Anexo01Component implements OnInit {

  anexo: any;
  tabela: any;
  linhas: any;
  constructor(private Services: Services, private router: Router, private routeUrl: ActivatedRoute,
    private http: Http) { }

  ngOnInit() {

    // this.Services.get('')
    //   .then(res => {
    //     this.anexo = res[0].nomeAnexo;
    //     this.tabela = res[0].tabelas[0].nomeTabela;
    //     // this.linhas = 
    //     this.linhas = res[0].tabelas[0].linhas.map(l => {
    //       return l.linha;
    //     }).filter((v, i, s) => {
    //       return s.indexOf(v) === i;
    //     }).map(l => {
    //       return res[0].tabelas[0].linhas.filter(l2 => l2.linha == l);
    //     });

    //   });

      this.Services.getFile('./app/assets/json/anexo1.json')
      .then(res => {
        this.anexo = res[0].nomeAnexo;
        this.tabela = res[0].tabelas[0].nomeTabela;
        // this.linhas = 
        this.linhas = res[0].tabelas[0].linhas.map(l => {
          return l.linha;
        }).filter((v, i, s) => {
          return s.indexOf(v) === i;
        }).map(l => {
          return res[0].tabelas[0].linhas.filter(l2 => l2.linha == l);
        });

      });





  }


}
