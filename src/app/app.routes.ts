import { Routes, RouterModule } from "@angular/router";
import {LoginRedirectService} from './services/login-redirect.service'
import {EnsureAuthenticatedService} from './services/ensure-authenticated.service'

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';

import {DriversComponent} from './admin/drivers/drivers.component';
import {DRIVER_ROUTES} from './admin/drivers/driver.routes'
import {NewDriverComponent} from './admin/drivers/new-driver/new-driver.component'

import {TRUCK_ROUTES} from './admin/trucks/truck.routes'
import {TrucksComponent} from './admin/trucks/trucks.component';
import {NewTruckComponent} from './admin/trucks/new-truck/new-truck.component'


const APP_ROUTES : Routes = [
    {path: '', redirectTo: 'login', pathMatch: "full"},
    { path: 'login', component: LoginComponent, canActivate: [LoginRedirectService] },
    { path: 'app', component: AdminComponent, children: [
        {path: 'drivers', component: DriversComponent, children: DRIVER_ROUTES},
        {path: 'driver/new', component: NewDriverComponent},
        {path: 'trucks', component: TrucksComponent, children: TRUCK_ROUTES},
        {path: 'truck/new', component: NewTruckComponent}
    ]},
    //{ path: 'dashboard', component: DashboardComponent, canActivate: [EnsureAuthenticatedService]},
    //{ path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
]

export const routing = RouterModule.forRoot(APP_ROUTES)