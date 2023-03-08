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
  
  AdminDptDashboard:adminDeptDashboardClass[]=[];
  AdminDptDashboardObj:adminDeptDashboardClass= new adminDeptDashboardClass();


  constructor(public http:HttpClient, public service:AdminDeptDashboardService) { }

  ngOnInit(): void {
    this.GetAdminDeptDashboardRecords();
  };

  GetAdminDeptDashboardRecords() {
    this.service.GetAdminDeptDashboard().subscribe((res:any)=>{
      this.AdminDptDashboardObj=res[0]
    })
  }



}
