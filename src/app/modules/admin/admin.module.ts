import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CrudComponent } from './components/crud/crud.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    AdminComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule
  ]
})
export class AdminModule { }
