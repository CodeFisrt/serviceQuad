import { Component, OnInit } from '@angular/core';
import { createRequestClass } from 'src/app/Core/Classes/createRequest';
import { CreateRequestService } from 'src/app/Core/Services/createRequest/create-request.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
 createRequestArray : createRequestClass[] = [];
 createRequestObj : createRequestClass = new createRequestClass();

  constructor(private service : CreateRequestService) { }

  ngOnInit(): void {
    this.getAllCreateEmployee();
  };

  getAllCreateEmployee(){
    this.service.getAllRequestByEmployeeId(this.createRequestObj.EmployeeId).subscribe((res:any)=>{
      this.createRequestArray = res
    })
  }

  onAdd(){

  };

  onEdit(){

  };

  onDelete(){

  };
}
