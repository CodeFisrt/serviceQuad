import { Component, OnInit } from '@angular/core';
import { deptClass } from 'src/app/Core/Classes/department';
import { employeeClass } from 'src/app/Core/Classes/employee';
import { requestListClass, searchList } from 'src/app/Core/Classes/requestList';
import { DeptService } from 'src/app/Core/Services/dept/dept.service';
import { EmployeeService } from 'src/app/Core/Services/employee/employee.service';
import { RequestListService } from 'src/app/Core/Services/requestList/request-list.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requestListArray: requestListClass[] = [];
  requestListObj: searchList = new searchList();
  deptArray : deptClass[] = [];
  empArray: employeeClass[]=[];
  isSeverity: boolean = false;

  constructor(private service: RequestListService, private deptService : DeptService , private empService : EmployeeService) { }

  ngOnInit(): void {
    this.onBlurRequest();
    this.getAlldeptRec();
    this.getAllEmpReco();
  };

  onBlurRequest(){
    this.service.getAllRequestList().subscribe((res: any) => {
      this.requestListArray = res;
    })
  }

  getAlldeptRec() {
    this.deptService.getDept().subscribe((res:any)=>{
      if(res){
        this.deptArray = res;
      }
    })
  };

  getAllEmpReco() {
    this.empService.getAllEmp().subscribe((res:any)=>{
      if(res){
        this.empArray = res;
      }
    })
  };

  onSearch(){
    this.service.getRequestByFilter(this.requestListObj).subscribe((res:any)=>{
        this.requestListArray = res;     
    })
  };

  onReset(){
    this.requestListObj = new searchList();
    this.onBlurRequest();
  }

}
