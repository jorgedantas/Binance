import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { FormsModule } from '@angular/forms';

var SharedCommonModule = require('@tcecommon/shared-module-common').SharedCommonModule;

@NgModule({
  imports: [
    CommonModule,
    NguiAutoCompleteModule,
    FormsModule,
    SharedCommonModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SharedModule { }
