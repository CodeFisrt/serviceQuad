import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }
  
  getAllEmp():Observable<any>{
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetEmployees')
  };
  createEmp(Obj:any):Observable<any>{
    return this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/CreateEmployee',Obj)
  };
  editEmp(id:number):Observable<any> {
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetEmployeeById?id='+id)
  };
  dpdlReport(id:number):Observable<any> {
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetEmployeeByDeptId?id='+id)
  };
  updateEmp(id:number,obj:any):Observable<any>{
    return this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/UpdateEmployee?id='+id,obj)
  };
  deleteEmp(id:number,obj:any):Observable<any>{
    return this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/DeleteEmployee?id='+id,obj)
  };
  dpdlDept():Observable<any>{
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartments')
  }

  
}
