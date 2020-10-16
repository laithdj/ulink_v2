import { RouterModule, Route, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PanelComponent } from './shared/panel/panel.component';
import { LoginComponent } from './shared/login/login.component';
// import { LoginComponent } from './shared/components/login/login.component';
// import { PanelComponent } from './shared/components/panel/panel.component';
// import { CanActivateViaAuthGuard } from './shared/services/can-activate-via-auth-guard.service';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
   // { path: '', redirectTo: '/login', pathMatch: 'full' },


    { path: 'dashboard',
     component: PanelComponent,
     children: [

        {
         path: 'create',
         loadChildren: './modules/create/create.module#CreateModule',
       //  canActivate: [CanActivateViaAuthGuard]
        } ,
        {
            path: 'orders',
            loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
          //  canActivate: [CanActivateViaAuthGuard]
           },
           {
            path: 'stores',
            loadChildren: './modules/stores/stores.module#StoresModule',
          //  canActivate: [CanActivateViaAuthGuard]
           },

          /*
        {
            path: 'completed',
            loadChildren: './modules/completed/completed.module#CompletedModule',
            canActivate: [CanActivateViaAuthGuard]
        }

        {
         path: 'orders',
         loadChildren: './modules/orders/orders.module#OrdersModule',
         canActivate: [CanActivateViaAuthGuard]
        },
        {
         path: 'customers',
         loadChildren: './modules/customers/customers.module#CustomersModule',
         canActivate: [CanActivateViaAuthGuard]
        },
        {
        path: 'ishtrakat',
        loadChildren: './modules/ishtrakat/ishtrakat.module#IshtrakatModule',
        canActivate: [CanActivateViaAuthGuard]
       },
       {
        path: 'price-list',
        loadChildren: './modules/price-list/price-list.module#PriceListModule',
        canActivate: [CanActivateViaAuthGuard]
       },
       {
        path: 'cash-drawer',
        loadChildren: './modules/cash-drawer/cash-drawer.module#CashDrawerModule',
        canActivate: [CanActivateViaAuthGuard]
       },
       {
        path: 'sales-report',
        loadChildren: './modules/reports/reports.module#ReportsModule',
        canActivate: [CanActivateViaAuthGuard]
       },
       {
        path: 'ishtrakat-report',
        loadChildren: './modules/reports/reports.module#ReportsModule',
        canActivate: [CanActivateViaAuthGuard]
       },
       {
        path: 'drop',
        loadChildren: './modules/reports/reports.module#ReportsModule',
        canActivate: [CanActivateViaAuthGuard]
       }
    */ ]
    },
     { path: 'product',
     loadChildren: () => import('./modules/product-store/product-store.module').then(m => m.ProductStoreModule) },
];
