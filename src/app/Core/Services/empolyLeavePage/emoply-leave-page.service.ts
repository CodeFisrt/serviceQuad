import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmoplyLeavePageService {

  constructor(public http: HttpClient) { }


  GetAllEmpLeaves(id: number): Observable<any> {
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetLeavesForApprovalBySuperwiserId?id=' + id)
  }
}
