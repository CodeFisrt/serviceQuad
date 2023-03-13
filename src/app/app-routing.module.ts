import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './Core/Gaurds/login/login.guard';
import { AdminDptDashboardComponent } from './Pages/admin-dpt-dashboard/admin-dpt-dashboard.component';
import { AdminDptLayoutComponent } from './Pages/admin-dpt-layout/admin-dpt-layout.component';
import { AdminLayoutComponent } from './Pages/admin-layout/admin-layout.component';
import { CreateRequestComponent } from './Pages/create-request/create-request.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { DepartmentTicketsComponent } from './Pages/department-tickets/department-tickets.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { EmpDashboardComponent } from './Pages/emp-dashboard/emp-dashboard.component';
import { EmployeeLayoutComponent } from './Pages/employee-layout/employee-layout.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { LeaveForApprovalComponent } from './Pages/leave-for-approval/leave-for-approval.component';
import { LeavesComponent } from './Pages/leaves/leaves.component';
import { LoginComponent } from './Pages/login/login.component';
import { ReportsComponent } from './Pages/reports/reports.component';
import { RequestListComponent } from './Pages/request-list/request-list.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: AdminLayoutComponent,
    canActivate:[LoginGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'adminEmployee', component: EmployeeComponent },
      { path: 'requestList', component: RequestListComponent },
      { path: 'adminDepartment', component: DepartmentComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'adminLeaves', component: LeavesComponent },
      { path: 'leaveForApproval', component: LeaveForApprovalComponent }
    ]
  },
  {
    path: '', component: AdminDptLayoutComponent,
    canActivate:[LoginGuard],
    children: [
      { path: 'adminDptDashboard', component: AdminDptDashboardComponent },
      { path: 'adminDeptTickets', component: DepartmentTicketsComponent },
      { path: 'deptRequestList', component: RequestListComponent },
      { path: 'admindeptLeaves', component: LeavesComponent},
      { path: 'adminleaveForApproval', component: LeaveForApprovalComponent }
      
    ]
  },
  {
    path: '', component: EmployeeLayoutComponent,
    canActivate:[LoginGuard],
    children: [
      { path: 'empDashboard', component: EmpDashboardComponent },
      { path: 'createRequest', component: CreateRequestComponent },
      { path: 'empLeaves', component: LeavesComponent },
      { path: 'empleaveForApproval', component: LeaveForApprovalComponent }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
