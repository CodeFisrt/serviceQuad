import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Core/Services/Login/login.service';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.css']
})
export class EmployeeLayoutComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

}
