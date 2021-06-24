import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseUpdateComponent } from './house/house-update/house-update.component';
import { DetailComponent } from './house/detail/detail.component';
import { CreateComponent } from './category/create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RoleListComponent } from './role/role-list/role-list.component';
import { HeaderBackendComponent } from './layout/backend-layout/header-backend/header-backend.component';
import { FooterBackendComponent } from './layout/backend-layout/footer-backend/footer-backend.component';
import {HttpClientModule} from '@angular/common/http';
import { RoleUpdateComponent } from './role/role-update/role-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HouseUpdateComponent,
    DetailComponent,
    CreateComponent,
    DashboardComponent,
    RoleListComponent,
    HeaderBackendComponent,
    FooterBackendComponent,
    RoleUpdateComponent,
    RoleUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
