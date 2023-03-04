import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/api';
import { LoginService } from 'src/app/Core/Services/Login/login.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  providers: [ConfirmationService]
})
export class AdminLayoutComponent implements OnInit {

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
