import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { CrudComponent } from './components/crud/crud.component';



@NgModule({
  declarations: [
    AdminComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
