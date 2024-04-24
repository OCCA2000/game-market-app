import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    StoreComponent,
    CatalogComponent,
    CartComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    PrimengModule
  ]
})
export class StoreModule { }
