import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children:[
      {
        path: 'catalog',
        component: CatalogComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'game/:id',
        component: GameComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
