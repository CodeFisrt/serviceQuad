import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { deptClass } from 'src/app/Core/Classes/department';
import { DeptService } from 'src/app/Core/Services/dept/dept.service';
import { LoginService } from 'src/app/Core/Services/Login/login.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [ConfirmationService, MessageService],

})
export class DepartmentComponent implements OnInit {
  deptArray: deptClass[] = [];
  dpetObj: deptClass = new deptClass();
  isEditHide: boolean = false;
  checked: boolean = false;
  msgs: Message[] = [];
  MessageService: any;
  constructor(private service: DeptService, public loginService: LoginService, private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAlldeptRec();
  }

  getAlldeptRec() {
    this.service.getDept().subscribe((res: any) => {
      if (res) {
        this.deptArray = res;
      };
    })
  }

  onReset() {
    this.dpetObj = new deptClass();
  };

  onAdd() {
    this.onReset();
  }

  onConfirmDelte(id: number) {
    this.confirmationService.confirm({
      message: 'Do tou want to delete?',
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
    this.service.createDept(this.dpetObj).subscribe((res: any) => {
      if (res) {
        this.getAlldeptRec();
      } else {
        alert(res.message)
      };
    })
  };



  onEdit(id: number) {
    this.service.editDept(id).subscribe((res: any) => {
      if (res) {
        this.dpetObj = res;
        this.MessageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      }else{
        this.MessageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
     }, (error: any) => {
      this.MessageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  }ConfirmationService(arg0: { severity: string; summary: string; detail: any; }) {
    throw new Error('Method not implemented.');
  }
;

  onDelete(id: number) {
    this.service.deleteDept(id, this.dpetObj).subscribe((res: any) => {
      if (res) {
        this.getAlldeptRec();
        this.MessageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      }else{
        this.MessageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
     }, (error: any) => {
      this.MessageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  };

  onUpdate(id: number) {
    this.service.updateDept(id, this.dpetObj).subscribe((res: any) => {
      if (res) {
        this.dpetObj = res;
        this.getAlldeptRec();
        this.MessageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      }else{
        this.MessageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
     }, (error: any) => {
      this.MessageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  }
}
