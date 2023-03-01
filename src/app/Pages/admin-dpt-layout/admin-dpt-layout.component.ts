import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Core/Services/Login/login.service';

@Component({
  selector: 'app-admin-dpt-layout',
  templateUrl: './admin-dpt-layout.component.html',
  styleUrls: ['./admin-dpt-layout.component.css']
})
export class AdminDptLayoutComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

}
