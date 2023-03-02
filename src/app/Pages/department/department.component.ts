import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { deptClass } from 'src/app/Core/Classes/department';
import { DeptService } from 'src/app/Core/Services/dept.service/dept.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  deptArray : deptClass[] =[];
  dpetObj : deptClass = new deptClass();
  isEditHide : boolean = false;

  constructor(private service: DeptService) { }

  ngOnInit(): void {
    this.getAlldeptRec();
  }
  getAlldeptRec() {
    
    this.service.getDept().subscribe((res:any)=>{
      if(res){
        this.deptArray = res;
      }
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
        alert(res.message);
      }else{
        alert(res.message)
      }
     })
  };
  onEdit(id:number) {
    
    this.service.editDept(id).subscribe((res:any)=>{
      if(res){
        this.dpetObj = res;
        alert(res.message)
      }else{
        alert(res.message)
      }
    })
  };
  onDelete(id:number){
    this.service.deleteDept(id,this.dpetObj).subscribe((res:any)=>{
      if(res){
        this.getAlldeptRec();
        alert(res.message)
      }else{
        alert(res.message)
      }
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
      }
      
     })
  }

}
