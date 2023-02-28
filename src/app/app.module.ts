import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { CreateRequestComponent } from './Pages/create-request/create-request.component';
import { RequestListComponent } from './Pages/request-list/request-list.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { ReportsComponent } from './Pages/reports/reports.component';
import { LeavesComponent } from './Pages/leaves/leaves.component';
import { LeaveForApprovalComponent } from './Pages/leave-for-approval/leave-for-approval.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent,
    CreateRequestComponent,
    RequestListComponent,
    DepartmentComponent,
    ReportsComponent,
    LeavesComponent,
    LeaveForApprovalComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

