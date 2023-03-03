import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRequestService {

  constructor(private http : HttpClient) { }

  getAllRequestByEmployeeId(id:number):Observable<any>{
    return this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetAllRequestByEmployee?id="+id)
  }
}
