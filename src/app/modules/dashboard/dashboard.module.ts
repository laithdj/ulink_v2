import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { OrderInfoComponent } from './dashboard/order-info/order-info.component';
import { OrdersComponent } from './dashboard/orders/orders.component';

@NgModule({
  declarations: [DashboardComponent, OrderInfoComponent, OrdersComponent],
  imports: [
    SharedModule.forRoot(),

    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
