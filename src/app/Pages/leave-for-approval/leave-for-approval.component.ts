import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { empolyLeavePageClass } from 'src/app/Core/Classes/empolyleave';
import { EmoplyLeavePageService } from 'src/app/Core/Services/empolyLeavePage/emoply-leave-page.service';

@Component({
  selector: 'app-leave-for-approval',
  templateUrl: './leave-for-approval.component.html',
  styleUrls: ['./leave-for-approval.component.css']
})
export class LeaveForApprovalComponent implements OnInit {

  leaveArry: empolyLeavePageClass[] = [];
  leaveObj: empolyLeavePageClass = new empolyLeavePageClass();
  leavesData: any;
  public isLoading: boolean = true;

  constructor(public http: HttpClient, public service: EmoplyLeavePageService) {
    const localData = localStorage.getItem('adminLoginDetails');
    if (localData != null) {
      this.leavesData = JSON.parse(localData);
      this.leaveObj.EmployeeId = this.leavesData.EmployeeId;
    }
  }

  ngOnInit(): void {
    this.GetLeavesForApprovalRecords();
  }


  GetLeavesForApprovalRecords() {
    this.service.GetAllEmpLeaves(this.leaveObj.EmployeeId).subscribe((res: any) => {
      this.leaveArry = res;
      this.isLoading = false;
    })
  };

}
