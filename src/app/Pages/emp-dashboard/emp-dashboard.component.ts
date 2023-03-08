import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { empDashboardClass } from 'src/app/Core/Classes/emp-dashboard';
import { EmpDashboardService } from 'src/app/Core/Services/dashboard/emp-dashboard.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

  empDashboard:empDashboardClass[]=[];
  empDashboardObj:empDashboardClass= new empDashboardClass();
  empUserData:any;
  

  constructor(public http:HttpClient,public service:EmpDashboardService) {

    const empData=localStorage.getItem('adminLoginDetails');
    if(empData!=null){
      this.empUserData=JSON.parse(empData);
      this.empDashboardObj.UserId=this.empUserData.UserId
    }
   }

  ngOnInit(): void {
    this.GetEmpDashboardRecords();  
  }

  GetEmpDashboardRecords() {
    this.service.GetEmpDashboard(this.empDashboardObj.UserId).subscribe((res:any)=>{
      this.empDashboardObj=res[0];
    })
  }



}
