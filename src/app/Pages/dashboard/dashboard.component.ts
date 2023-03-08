import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { adminDashboardClass } from 'src/app/Core/Classes/admin-dashboard';
import { AdmindashboardService } from 'src/app/Core/Services/dashboard/admindashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboard:adminDashboardClass[]=[];
  dashboardObj:adminDashboardClass= new adminDashboardClass()

  constructor(public http:HttpClient, public service:AdmindashboardService ) { }

  ngOnInit(): void {
    this.getAdmminDashboardRecords();
  };

  getAdmminDashboardRecords() {
    this.service.getAdmminDashboard().subscribe((res:any)=>{
      this.dashboardObj=res[0];
    })
  };

}
