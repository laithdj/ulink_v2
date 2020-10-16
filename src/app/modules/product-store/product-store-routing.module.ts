import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductStoreComponent } from './product-store/product-store.component';


const routes: Routes = [
  {
    path: 'abc',
    component: ProductStoreComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductStoreRoutingModule { }
