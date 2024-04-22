import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestServiceService } from './services/admin/test-service.service';
import { StoreService } from './services/store/store.service';
import { AdminService } from './services/admin/admin.service';
import { AlternativeStoreService } from './services/store/alternative-store.service';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  // LAZY LOADING
  {
    path: 'store',
    loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
