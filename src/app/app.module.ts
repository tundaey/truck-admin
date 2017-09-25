import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routes';

import {AuthService} from './services/auth.service';
import {DriverService} from './services/driver.service';
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
    DriverHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthService,
    DriverService,
    LoginRedirectService,
    EnsureAuthenticatedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
