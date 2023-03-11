import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptTicketService {

  constructor(private http : HttpClient) { }

  getAllDeptTicket(id:number): Observable<any>{
    return this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetAssignedRequestByUserId?userid="+id)
  }
}
