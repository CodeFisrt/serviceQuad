import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { deptClass } from 'src/app/Core/Classes/department';
import { employeeClass } from 'src/app/Core/Classes/employee';
import { DeptService } from 'src/app/Core/Services/dept/dept.service';
import { EmployeeService } from 'src/app/Core/Services/employee/employee.service';
import { LoginService } from 'src/app/Core/Services/Login/login.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class EmployeeComponent implements OnInit {
  empArray: employeeClass[] = [];
  empObj: employeeClass = new employeeClass();
  roleArray: string[] = ['Employee', 'Admin Dept.']
  deptArray: deptClass[] = [];
  isSave: boolean = true;
  deptobj: deptClass = new deptClass();
  msgs: Message[] = [];
  ConfirmationService: any;
  MessageService: any;
  public isLoading: boolean = true;

  constructor(private service: EmployeeService, private deptService: DeptService,
    private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, public loginService: LoginService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllEmpReco();
    this.getAlldeptRec();
    this.getDpdlReport();
  };

  getAllEmpReco() {
    this.service.getAllEmp().subscribe((res: any) => {
      if (res) {
        this.empArray = res;
        this.isLoading = false;
      };
    })
  };

  getAlldeptRec() {
    this.deptService.getDept().subscribe((res: any) => {
      if (res) {
        this.deptArray = res;
        this.isLoading = false;
      };
    })
  };

  onSave() {
    this.service.createEmp(this.empObj).subscribe((res: any) => {
      if (res) {
        this.getAllEmpReco();
        this.MessageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.MessageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.MessageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  };

  onReset() {
    this.empObj = new employeeClass();
  };

  onEdit(id: number) {
    this.isSave = false;
    this.service.editEmp(id).subscribe((res: any) => {
      if (res) {
        this.empObj = res;
        this.MessageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.MessageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.MessageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  };

  onUpdate(id: number) {
    this.isSave = true;
    this.service.updateEmp(id, this.empObj).subscribe((res: any) => {
      if (res) {
        this.empObj = res;
        this.getAllEmpReco();
        this.MessageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.MessageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.MessageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  };

  onDeleteConfirm(id: number) {
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

  onDelete(id: number) {
    this.service.deleteEmp(id, this.empObj).subscribe((res: any) => {
      if (res) {
        this.getAllEmpReco();
        this.MessageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      } else {
        this.MessageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    }, (error: any) => {
      this.MessageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  }

  getDepName(id: number) {
    const deptName = this.deptArray.find(m => m.DeptId == id);
    return deptName?.DeptName;
  };

  getDpdlReport() {
    this.service.dpdlReport(this.deptobj.DeptId).subscribe((res: any) => {
      if (res) {
        this.empObj = res;
      };
    })
  };

  getDpdlDept() {
    this.service.dpdlDept().subscribe((res: any) => {
      if (res) {
        this.deptArray = res;
      };
    })
  };
}
