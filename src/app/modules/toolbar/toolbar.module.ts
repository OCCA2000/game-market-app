
import { NgModule } from '@angular/core';


import { ToolbarComponent } from './toolbar/toolbar.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({

 declarations: [
    ToolbarComponent,],
    imports: [PrimengModule],
    exports: [
      ToolbarComponent,],
    providers: []
})
export class ToolbarModule { }
