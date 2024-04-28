
import { NgModule } from '@angular/core';


import { ToolbarComponent } from './toolbar/toolbar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({

 declarations: [
    ToolbarComponent,],
    imports: [PrimengModule,
      FormsModule
    ],
    exports: [
      ToolbarComponent],
    providers: []
})
export class ToolbarModule { }
