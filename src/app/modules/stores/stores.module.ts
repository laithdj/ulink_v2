import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores/stores.component';
import { ProductsComponent } from './stores/products/products.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StoresComponent, ProductsComponent],
  imports: [
    SharedModule.forRoot(),
    CommonModule,
    StoresRoutingModule
  ]
})
export class StoresModule { }
