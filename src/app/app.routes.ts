import { Routes, RouterModule } from "@angular/router";
import {LoginRedirectService} from './services/login-redirect.service'
import {EnsureAuthenticatedService} from './services/ensure-authenticated.service'

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';
import {DriversComponent} from './admin/drivers/drivers.component';

import {DRIVER_ROUTES} from './admin/drivers/driver.routes'
import {DriverDetailComponent} from './admin/drivers/driver-detail/driver-detail.component'


const APP_ROUTES : Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LoginRedirectService] },
    { path: 'app', component: AdminComponent, children: [
        {path: 'drivers', component: DriversComponent, children: DRIVER_ROUTES},
    ]},
    //{ path: 'dashboard', component: DashboardComponent, canActivate: [EnsureAuthenticatedService]},
    //{ path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
]

export const routing = RouterModule.forRoot(APP_ROUTES)