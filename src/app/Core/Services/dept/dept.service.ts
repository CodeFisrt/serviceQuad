import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor(private http: HttpClient) { }

  getDept(): Observable<any> {
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartments')
  };
  createDept(obj: any): Observable<any> {
    return this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/CreateDepartment', obj)
  }
  editDept(id: number): Observable<any> {
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartmentById?id=' + id)
  }
  deleteDept(id: number, obj: any): Observable<any> {
    return this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/DeleteDepartment?id=' + id, obj)
  }
  updateDept(id: number, obj: any): Observable<any> {
    return this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/UpdateDepartment?id=' + id, obj)
  }
}
