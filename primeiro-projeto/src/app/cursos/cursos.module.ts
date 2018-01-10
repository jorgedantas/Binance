import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  exports: [
    CursosComponent
  ],
  providers: [ CursosService ]
})
export class CursosModule { }
