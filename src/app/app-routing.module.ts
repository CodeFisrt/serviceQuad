import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRequestComponent } from './Pages/create-request/create-request.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { LeaveForApprovalComponent } from './Pages/leave-for-approval/leave-for-approval.component';
import { LeavesComponent } from './Pages/leaves/leaves.component';
import { ReportsComponent } from './Pages/reports/reports.component';
import { RequestListComponent } from './Pages/request-list/request-list.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'createRequest',component:CreateRequestComponent},
  {path:'requestList',component:RequestListComponent},
  {path:'dapatment',component:DepartmentComponent},
  {path:'reports',component:ReportsComponent},
  {path:'leaves',component:LeavesComponent},
  {path:'leaveForApproval',component:LeaveForApprovalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
