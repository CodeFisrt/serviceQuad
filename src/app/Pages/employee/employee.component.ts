import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { deptClass } from 'src/app/Core/Classes/department';
import { employeeClass } from 'src/app/Core/Classes/employee';
import { DeptService } from 'src/app/Core/Services/dept/dept.service';
import { EmployeeService } from 'src/app/Core/Services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [MessageService]
})
export class EmployeeComponent implements OnInit {
  empArray : employeeClass[]  = [];
  empObj : employeeClass = new employeeClass();
  roleArray:string[] =['Employee','Admin Dept.']
  deptArray : deptClass[] = [];

  constructor(private service : EmployeeService, private deptService : DeptService, private messageService: MessageService,
    private primengConfig: PrimeNGConfig) { }

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
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  };
  onReset() {
    this.empObj = new employeeClass();

  };
  onEdit(id: number) {
    this.service.editEmp(id).subscribe((res:any)=>{
      if(res){
        this.empObj = res;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  };

  onUpdate(id:number) {
    this.service.updateEmp(id,this.empObj).subscribe((res:any)=>{
      if(res){
        this.empObj = res;
        this.getAllEmpReco();
         this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  };

  onDelete(id:number){
    this.service.deleteEmp(id,this.empObj).subscribe((res:any)=>{
      if(res){
        this.getAllEmpReco();
         this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
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
