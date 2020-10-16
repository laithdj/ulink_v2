import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './main/product/product.component';
import { ProductInfoComponent } from './main/product/product-info/product-info.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product-info',
    component: ProductInfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CreateRoutingModule { }
