import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataTableModule} from 'angular-4-data-table/src/index'
import {routing} from './app.routes';

import {AuthService} from './services/auth.service';
import {DriverService} from './services/driver.service';
import {TruckService} from './services/truck.service';
import {EnsureAuthenticatedService} from './services/ensure-authenticated.service'
import {LoginRedirectService} from './services/login-redirect.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './partials/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { SideMenuComponent } from './partials/side-menu/side-menu.component';
import { DriversComponent } from './admin/drivers/drivers.component';
import { DriverInfoComponent } from './admin/drivers/driver-info/driver-info.component';
import { DriverDetailComponent } from './admin/drivers/driver-detail/driver-detail.component';
import { DriverDeductionsComponent } from './admin/drivers/driver-deductions/driver-deductions.component';
import { DriverHistoryComponent } from './admin/drivers/driver-history/driver-history.component';
import { NewDriverComponent } from './admin/drivers/new-driver/new-driver.component';
import { TrucksComponent } from './admin/trucks/trucks.component';
import { NewTruckComponent } from './admin/trucks/new-truck/new-truck.component';
import { TruckDetailComponent } from './admin/trucks/truck-detail/truck-detail.component';
import { TruckHistoryComponent } from './admin/trucks/truck-history/truck-history.component';
import { TruckDocumentsComponent } from './admin/trucks/truck-documents/truck-documents.component';
import { TruckInfoComponent } from './admin/trucks/truck-info/truck-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    AdminComponent,
    SideMenuComponent,
    DriversComponent,
    DriverInfoComponent,
    DriverDetailComponent,
    DriverDeductionsComponent,
    DriverHistoryComponent,
    NewDriverComponent,
    TrucksComponent,
    NewTruckComponent,
    TruckDetailComponent,
    TruckHistoryComponent,
    TruckDocumentsComponent,
    TruckInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthService,
    TruckService,
    DriverService,
    LoginRedirectService,
    EnsureAuthenticatedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
