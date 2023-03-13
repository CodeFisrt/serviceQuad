import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { adminDeptDashboardClass } from 'src/app/Core/Classes/admin-dept-dashboard';
import { AdminDeptDashboardService } from 'src/app/Core/Services/dashboard/admin-dept-dashboard.service';

@Component({
  selector: 'app-admin-dpt-dashboard',
  templateUrl: './admin-dpt-dashboard.component.html',
  styleUrls: ['./admin-dpt-dashboard.component.css']
})
export class AdminDptDashboardComponent implements OnInit {

  AdminDptDashboard: adminDeptDashboardClass[] = [];
  AdminDptDashboardObj: adminDeptDashboardClass = new adminDeptDashboardClass();
  adminUserData: any;
  employeeId: number = 0
  public isLoading: boolean = true;


  constructor(public http: HttpClient, public service: AdminDeptDashboardService) {
    const adminData = localStorage.getItem('adminLoginDetails');
    if (adminData != null) {
      this.adminUserData = JSON.parse(adminData);
      this.employeeId = this.adminUserData.EmployeeId;
    }
  };


  ngOnInit(): void {
    this.GetAdminDeptDashboardRecords();
  };


  GetAdminDeptDashboardRecords() {
    this.service.GetAdminDeptDashboard(this.employeeId).subscribe((res: any) => {
      this.AdminDptDashboardObj = res[0];
      this.isLoading = false;
    })
  };





}
