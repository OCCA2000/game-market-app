
import { NgModule } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';





@NgModule({
    declarations: [],
    imports: [
      ToolbarModule,
      ButtonModule,
      SplitButtonModule,
      AvatarModule,
      InputTextModule,
      PanelModule],
    exports: [
      ToolbarModule,
      ButtonModule,
      SplitButtonModule,
      AvatarModule,
      InputTextModule,
      PanelModule],
    providers: []
})
export class PrimengModule { }
