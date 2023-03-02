import { Component, OnInit } from '@angular/core';
import { deptClass } from 'src/app/Core/Classes/department';
import { employeeClass } from 'src/app/Core/Classes/employee';
import { DeptService } from 'src/app/Core/Services/dept.service/dept.service';
import { EmployeeService } from 'src/app/Core/Services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empArray : employeeClass[]  = [];
  empObj : employeeClass = new employeeClass();
  roleArray:string[] =['Employee','Admin Dept.']
  deptArray : deptClass[] = [];

  constructor(private service : EmployeeService, private deptService : DeptService) { }

  ngOnInit(): void {
    this.getAllEmpReco();
    this.getAlldeptRec();
  }
  getAllEmpReco() {
    this.service.getAllEmp().subscribe((res:any)=>{
      if(res){
        this.empArray = res;
      }
    })
  };
  getAlldeptRec() {
    this.deptService.getDept().subscribe((res:any)=>{
      if(res){
        this.deptArray = res;
      }
    })
  };
  onSave() {
     this.service.createEmp(this.empObj).subscribe((res:any)=>{
      if(res){
        this.getAllEmpReco();
        alert(res.message);
      }else{
        alert(res.message)
      }
     })
  };
  onReset() {
    this.empObj = new employeeClass();

  };
  onEdit(id: number) {
    this.service.editEmp(id).subscribe((res:any)=>{
      if(res){
        this.empObj = res;
      }else{
        alert(res.message)
      }
    })
  };
  onUpdate(id:number) {
    this.service.updateEmp(id,this.empObj).subscribe((res:any)=>{
      if(res){
        this.empObj = res;
        this.getAllEmpReco();
        alert(res.message)
      }else{
        alert(res.message)
      };
    })
  };
  onDelete(id:number){
    this.service.deleteEmp(id,this.empObj).subscribe((res:any)=>{
      if(res){
        this.getAllEmpReco();
        alert(res.message)
      }else{
        alert(res.message)
      }
    })
  }
  getDepName(id: number) {
    const deptName = this.deptArray.find(m => m.DeptId == id);
    return deptName ?.DeptName;
  }
  getDpdlReport(id:number){
    this.service.dpdlReport(id).subscribe((res:any)=>{
      if(res){
        this.empObj = res;
      }
    })
  }

}
