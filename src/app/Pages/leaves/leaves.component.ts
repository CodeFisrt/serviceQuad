import { Component, OnInit } from '@angular/core';
import { leaveClass } from 'src/app/Core/Classes/leave';
import { LeaveService } from 'src/app/Core/Services/Leave/leave.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
  leaveArray: leaveClass[];
  empLeaveArray: leaveClass[];
  LeaveObj: leaveClass = new leaveClass();
  loggedInRole: string = '';
  loginUserData: any;
  isload:boolean=true;
  constructor(public service: LeaveService) {
    this.leaveArray = [];
    this.empLeaveArray = []
    const role = localStorage.getItem('role');
    if (role != null) {
      this.loggedInRole = role;
    };

    const empData = localStorage.getItem('adminLoginDetails');
    if (empData != null) {
      this.loginUserData = JSON.parse(empData);
      this.LeaveObj.EmployeeId = this.loginUserData.EmployeeId;
    }
  }

  ngOnInit(): void {
    this.getAllAdminLeaves();
    this.getAllEmployeeLeaves();
  }
  getAllAdminLeaves() {
    this.service.getAllLeaves().subscribe((res: any) => {
      this.leaveArray = res;
    })
  }

  getAllEmployeeLeaves() {
    this.service.getAllEmpLeave(this.LeaveObj.EmployeeId).subscribe((res: any) => {
      this.empLeaveArray = res;
    })
  }
  onSave() {
    this.service.saveLeave(this.LeaveObj).subscribe((res: any) => {
      if (res) {
        this.getAllEmployeeLeaves()
      }
      this.onReset();
    })
  }
  onReset() {
    this.LeaveObj = new leaveClass();
  }

  onBlur(){
   
  }
}