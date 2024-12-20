import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { TableComponent } from './pages/table/table.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'auth/login',
        pathMatch:'full'
    },
    {
        path:'auth/login',
        component:LoginComponent
    },
    {
        path:'',
        component:SingleLayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'orders',
                component:OrdersComponent
            },
            {
                path:'table',
                component:TableComponent
            },
            {
                path:'foods',
                component:FoodsComponent
            },
            {
                path:'logout',
                component:LogoutComponent
            }
        ]
    }
];
