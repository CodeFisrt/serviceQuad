import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(public http:HttpClient) { }

  getAllLeaves():Observable<any>{
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetAllLeaves');
  }
  getAllEmpLeave(id:number):Observable<any>{
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetAllLeavesByEmployeeId?id='+id)
  }
  saveLeave(obj:any):Observable<any>{
    return this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/AddLeave',obj);
  }
}
