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

  public visible: boolean = true;

  public changetype: boolean = true;

  constructor(private service: LoginService, private route: Router, private messageService: MessageService,
    private primengConfig: PrimeNGConfig) { };

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  };

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  };

  onLogin() {
    debugger;
    this.service.getAllLogin(this.loginObj).subscribe((res: any) => {
      localStorage.setItem('adminLoginDetails', JSON.stringify(res));

      if (res.Role == 'Admin') {
        this.route.navigateByUrl('dashboard');
        localStorage.setItem('role', 'Admin')
      } else if (res.Role == 'AdminDept') {
        this.route.navigateByUrl('adminDptDashboard');
        localStorage.setItem('role', 'AdminDept')
      } else if (res.Role == 'Employee') {
        this.route.navigateByUrl('empDashboard');
        localStorage.setItem('role', 'Employee')
      } else {
        this.messageService.add({ key: 'tl', severity: 'error', summary: 'Error', detail: 'Someting Worng' });
      }
    }, (error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    });

  };

}
