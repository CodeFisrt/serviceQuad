import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { createRequestClass } from 'src/app/Core/Classes/createRequest';
import { deptClass } from 'src/app/Core/Classes/department';
import { CreateRequestService } from 'src/app/Core/Services/createRequest/create-request.service';
import { DeptService } from 'src/app/Core/Services/dept/dept.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css'],
  providers: [MessageService]
})
export class CreateRequestComponent implements OnInit {
  createRequestArray: createRequestClass[] = [];
  createRequestObj: createRequestClass = new createRequestClass();
  deptArray: deptClass[] = [];

  loggingUserData: any;

  constructor(private service: CreateRequestService, private deptService: DeptService, private messageService: MessageService,
    private primengConfig: PrimeNGConfig) {
    const localData = localStorage.getItem('adminLoginDetails');
    if (localData != null) {
      this.loggingUserData = JSON.parse(localData);
      this.createRequestObj.EmployeeId = this.loggingUserData.EmployeeId;
    }
  }

  isSave: boolean = true;

  ngOnInit(): void {
    this.getAllCreateEmployee();
    this.getAllDept();
  }

  // ngOnInit(): void {
    
  //   this.getAllDept();
  //   this.getAllCreateEmployee();
  // };

  getAllCreateEmployee() {
    this.service.getAllRequestByEmployeeId(this.createRequestObj.EmployeeId).subscribe((res: any) => {
      this.createRequestArray = res;
    })
  };

  getAllDept() {
    this.deptService.getDept().subscribe((res: any) => {
      if (res) {
        this.deptArray = res;
      }
    })
  };

  onSave() {
    this.createRequestObj.EmployeeId =  this.loggingUserData.EmployeeId;
    this.service.addCreateRequest(this.createRequestObj).subscribe((res: any) => {
      if (res) {
        this.getAllCreateEmployee();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
    this.onReset();
  };

  onAdd() {
    this.onReset();
    this.isSave = true;
  };

  onEdit(id:number) {
    this.isSave = false;
    this.onReset();
    this.service.editCreateRequest(id).subscribe((res: any) => {
      if (res) {
        this.createRequestObj = res;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  };

  onUpdate(id: number,obj:any) {
    this.service.updateCreateRequest(id,obj).subscribe((res: any) => {
      if (res) {
        this.getAllCreateEmployee();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
    this.onReset();
  };

  onDelete(id: number) {
    this.service.deleteCreateRequest(id,this.createRequestObj).subscribe((res: any) => {
      if (res) {
        this.getAllCreateEmployee();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  };

  onReset() {
    this.createRequestObj = new createRequestClass();
  };
}
