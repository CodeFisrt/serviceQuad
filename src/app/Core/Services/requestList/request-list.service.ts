import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestListService {

  constructor(private http : HttpClient) { }

  getAllRequestList():Observable<any>{
    return this.http.get(" https://akbarapi.funplanetresort.in/api/MyRequest/GetAllRequest")
  };

  getRequestByFilter(obj:any):Observable<any>{
    return this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/GetRequestByFilter",obj)
  }
}
