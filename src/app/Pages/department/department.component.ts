import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { deptClass } from 'src/app/Core/Classes/department';
import { DeptService } from 'src/app/Core/Services/dept/dept.service';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [MessageService]
})
export class DepartmentComponent implements OnInit {
  deptArray : deptClass[] =[];
  dpetObj : deptClass = new deptClass();
  isEditHide : boolean = false;
  checked: boolean = false;
  constructor(private service: DeptService,private messageService: MessageService,
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
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
     }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  };

  onDelete(id:number){
    this.service.deleteDept(id,this.dpetObj).subscribe((res:any)=>{
      if(res){
        this.getAlldeptRec();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
     }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  };

  onUpdate(id:number) {
     this.service.updateDept(id,this.dpetObj).subscribe((res:any)=>{
      if(res){
        this.dpetObj = res;
        this.getAlldeptRec();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
     }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  }
}
