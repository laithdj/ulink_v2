import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CreateRoutingModule } from './create-routing.module';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './main/product/product.component';
import { ProductInfoComponent } from './main/product/product-info/product-info.component';

@NgModule({
  declarations: [MainComponent, ProductComponent, ProductInfoComponent],
  imports: [
    SharedModule.forRoot(),
    CommonModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
