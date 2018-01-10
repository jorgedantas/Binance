import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];
  
  moedas: any[];

  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'http://loiane.training';

    /*for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }*/

    //var servico = new CursosService();
    
    this.cursos = this.cursosService.getCursos();

  }

  ngOnInit() {
    // this.cursosService.get('/api/v1/exchangeInfo')
    // .then(res => {
    //   this.cursos = res;
    //    console.log(res)
    // });

    this.cursosService.get('/api/v1/ticker/24hr?symbol=XLMBTC')
    .then(res => {
      this.moedas = res;
    });
  }

}
