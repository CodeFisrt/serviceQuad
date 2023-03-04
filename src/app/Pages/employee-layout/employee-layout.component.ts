import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { LoginService } from 'src/app/Core/Services/Login/login.service';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.css'],
  providers: [ConfirmationService]
})
export class EmployeeLayoutComponent implements OnInit {

  public isLoading: boolean = true;

  msgs: Message[] = [];
  
  constructor(public loginService: LoginService, private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.isLoading = false;
  }
  
  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
        this.loginService.onLogout();
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
