import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDashboardService {

  constructor(public http:HttpClient) { }

  
  GetEmpDashboard(id:number):Observable<any> {
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetEmpDashboardById?id='+id)
  }
}
