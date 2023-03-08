import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message,  MessageService,  PrimeNGConfig } from 'primeng/api';
import { deptClass } from 'src/app/Core/Classes/department';
import { DeptService } from 'src/app/Core/Services/dept.service/dept.service';
import { LoginService } from 'src/app/Core/Services/Login/login.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [ConfirmationService, MessageService],
  
})
export class DepartmentComponent implements OnInit {
  deptArray : deptClass[] =[];
  dpetObj : deptClass = new deptClass();
  isEditHide : boolean = false;
  checked: boolean = false;
  msgs: Message[] = [];
  constructor(private service: DeptService,public loginService: LoginService, private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.getAlldeptRec();
  }

  getAlldeptRec() {
    this.service.getDept().subscribe((res:any)=>{
      if(res){
        this.deptArray = res;
      };
    })
  }

  onReset() {
     this.dpetObj = new deptClass();
  };

  onAdd(){
    this.onReset();
  }

  confirm1(id:number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
        this.onDelete(id);
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

  onSave() {
    this.service.createDept(this.dpetObj).subscribe((res:any)=>{
      if(res){
        this.getAlldeptRec();
      }else{
        alert(res.message)
      };
     })
     };
      
  

  onEdit(id:number) {
    this.service.editDept(id).subscribe((res:any)=>{
      if(res){
        this.dpetObj = res;
        alert(res.message)
      }else{
        alert(res.message)
      };
    })
  };

  onDelete(id:number){
    this.service.deleteDept(id,this.dpetObj).subscribe((res:any)=>{
      if(res){
        this.getAlldeptRec();
        alert(res.message)
      }else{
        alert(res.message)
      };
    })
  };

  onUpdate(id:number) {
     this.service.updateDept(id,this.dpetObj).subscribe((res:any)=>{
      if(res){
        this.dpetObj = res;
        this.getAlldeptRec();
        alert(res.message)
      }else{
        alert(res.message)
      };      
     })
  };
}
