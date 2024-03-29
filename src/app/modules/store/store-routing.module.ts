import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { CatalogComponent } from './components/catalog/catalog.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children:[
      {
        path: 'catalog',
        component: CatalogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
