import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  constructor(public http:HttpClient) { }

  getAdmminDashboard():Observable<any> {
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/getAdmminDashboard')
   };
}
