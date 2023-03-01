import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginClasses } from 'src/app/Core/Classes/loginClass';
import { LoginService } from 'src/app/Core/Services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginObj: loginClasses = new loginClasses();

  constructor(private service: LoginService, private route: Router) { }

  ngOnInit(): void {

  }


  onLogin() {
    
    this.service.getAllLogin(this.loginObj).subscribe((res: any) => {
      localStorage.setItem('adminLoginDetails',JSON.stringify(res));
      if(res.Role == 'Admin'){
        this.route.navigateByUrl('dashboard')
      }else if (res.Role == 'AdminDept'){
        this.route.navigateByUrl('adminDptDashboard')
      }else if(res.Role == 'Employee'){
        this.route.navigateByUrl('empDashboard')
      }else{
        alert('Wrong Credentials')
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
    })
  }

}
