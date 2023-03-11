import { Component, OnInit } from '@angular/core';
import { deptTicketsClass } from 'src/app/Core/Classes/deptTickets';
import { DeptTicketService } from 'src/app/Core/Services/deptTicket/dept-ticket.service';

@Component({
  selector: 'app-department-tickets',
  templateUrl: './department-tickets.component.html',
  styleUrls: ['./department-tickets.component.css']
})
export class DepartmentTicketsComponent implements OnInit {
  deptTicketArray : deptTicketsClass[] = [];
  deptTicketObj : deptTicketsClass = new deptTicketsClass();

  loggingUserData : any;
  
  constructor(private service : DeptTicketService) { 
    const localData = localStorage.getItem('adminLoginDetails');
    if (localData != null) {
      this.loggingUserData = JSON.parse(localData);
      this.deptTicketObj.EmployeeId = this.loggingUserData.EmployeeId;
    }
  }

  ngOnInit(): void {
    this.getAllDeptTicketRecord();
  }

  getAllDeptTicketRecord(){
    this.service.getAllDeptTicket(this.deptTicketObj.EmployeeId).subscribe((res:any)=>{
        this.deptTicketArray = res;
    })
  }
}
