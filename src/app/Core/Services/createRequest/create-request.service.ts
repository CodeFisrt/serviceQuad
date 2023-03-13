import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRequestService {

  constructor(private http: HttpClient) { }

  getAllRequestByEmployeeId(id: number): Observable<any> {
    return this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetAllRequestByEmployee?id=" + id)
  };

  addCreateRequest(obj: any): Observable<any> {
    return this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/CreateRequestMaster", obj)
  };

  editCreateRequest(id: number): Observable<any> {
    return this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetRequestById?id=" + id)
  };

  updateCreateRequest(id: number, obj: any): Observable<any> {
    return this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/UpdateRequestMaster?id=" + id, obj)
  };

  deleteCreateRequest(id: number, obj: any): Observable<any> {
    return this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/DeleteRequestMaster?id=" + id, obj)
  }
}
