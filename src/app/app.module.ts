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
import { LoginComponent } from './Pages/login/login.component';
import { AdminLayoutComponent } from './Pages/admin-layout/admin-layout.component';
import { EmployeeLayoutComponent } from './Pages/employee-layout/employee-layout.component';
import { AdminDptLayoutComponent } from './Pages/admin-dpt-layout/admin-dpt-layout.component';
import { AdminDptDashboardComponent } from './Pages/admin-dpt-dashboard/admin-dpt-dashboard.component';
import { EmpDashboardComponent } from './Pages/emp-dashboard/emp-dashboard.component';
import { LoginGuard } from './Core/Gaurds/login/login.guard';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService , MessageService} from 'primeng/api';
import { AllpipePipe } from './Shared/Pipes/allpipe.pipe';
import { LoaderComponent } from './Shared/Reusable Componant/loader/loader.component';

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
    LoginComponent,
    AdminLayoutComponent,
    EmployeeLayoutComponent,
    AdminDptLayoutComponent,
    AdminDptDashboardComponent,
    EmpDashboardComponent,
    AllpipePipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ConfirmDialogModule,
    ButtonModule,
    MessagesModule,
    ConfirmPopupModule
  ],
  providers: [LoginGuard,ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

