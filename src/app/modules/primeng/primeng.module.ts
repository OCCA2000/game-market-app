
import { NgModule } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    declarations: [],
    imports: [
      ToolbarModule,
      ButtonModule,
      SplitButtonModule,
      AvatarModule,
      InputTextModule,
      PanelModule,
      CardModule,
      TooltipModule,
      TableModule,
      PaginatorModule,
      ToastModule,
      DialogModule,
      FieldsetModule,
      CheckboxModule],
    exports: [
      ToolbarModule,
      ButtonModule,
      SplitButtonModule,
      AvatarModule,
      InputTextModule,
      PanelModule,
      CardModule,
      TooltipModule,
      TableModule,
      PaginatorModule,
      ToastModule,
      DialogModule,
      FieldsetModule,
      CheckboxModule],
    providers: []
})
export class PrimengModule { }
