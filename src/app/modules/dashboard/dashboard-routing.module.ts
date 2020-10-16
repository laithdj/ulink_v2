import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderInfoComponent } from './dashboard/order-info/order-info.component';
import { OrdersComponent } from './dashboard/orders/orders.component';

const routes: Routes = [
  {
    path: 'stores',
    component: DashboardComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'order-info',
    component: OrderInfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
