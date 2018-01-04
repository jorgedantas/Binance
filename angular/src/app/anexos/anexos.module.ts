import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Anexo01Component } from '../anexos/anexo01/anexo01.component';
import { Anexo02Component } from '../anexos/anexo02/anexo02.component';
import { Anexo06Component } from '../anexos/anexo06/anexo06.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Anexo01Component,
    Anexo02Component,
    Anexo06Component
  ]
})
export class TestModule { }
