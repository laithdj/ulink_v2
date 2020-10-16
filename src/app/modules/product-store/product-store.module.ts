import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductStoreRoutingModule } from './product-store-routing.module';



@NgModule({
  declarations: [ProductStoreComponent],
  imports: [
    CommonModule,
    ProductStoreRoutingModule
  ]
})
export class ProductStoreModule { }
