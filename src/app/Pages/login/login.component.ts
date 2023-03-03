import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { loginClasses } from 'src/app/Core/Classes/loginClass';
import { LoginService } from 'src/app/Core/Services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  public loginObj: loginClasses = new loginClasses();

  constructor(private service: LoginService, private route: Router, private messageService: MessageService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }


  onLogin() {
    
      this.service.getAllLogin(this.loginObj).subscribe((res: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
      localStorage.setItem('adminLoginDetails', JSON.stringify(res));
      if (res.Role == 'Admin') {
        this.route.navigateByUrl('dashboard');
      } else if (res.Role == 'AdminDept') {
        this.route.navigateByUrl('adminDptDashboard');
      } else if (res.Role == 'Employee') {
        this.route.navigateByUrl('empDashboard');
      } else {
        this.messageService.add({key: 'tl', severity:'error', summary: 'Error', detail: 'Someting Worng'});
      }
      // if (this.loginObj.UserName == 'admin' && this.loginObj.Password == '1234') {
      //   localStorage.setItem('adminLoginDetails',this.loginObj.UserName)
      //   localStorage.setItem('Role','admin')
      //   this.route.navigateByUrl('dashboard')
      // } else if (this.loginObj.UserName == 'admindpt' && this.loginObj.Password == '1234') {
      //   localStorage.setItem('adminLoginDetails',this.loginObj.UserName)
      //   localStorage.setItem('Role','admindpt')
      //   this.route.navigateByUrl('dapartment')
      // } else if (this.loginObj.UserName == 'employee' && this.loginObj.Password == '1234') {
      //   localStorage.setItem('adminLoginDetails',this.loginObj.UserName)
      //   localStorage.setItem('Role','employee')
      //   this.route.navigateByUrl('createRequest')
      // } else {
      //   alert('Wrong Credentials')
      // }
    }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    });
  }
}
