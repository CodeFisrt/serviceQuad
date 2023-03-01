import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router:Router) { }
  getAllUser(): Observable<any> {
    return this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetUsers')
  }

  getAllLogin(obj: any): Observable<any> {
    return this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/Login', obj)
  }

  logUserInfo():any{
    let localData = localStorage.getItem('adminLoginDetails');
    if(localData != null){
      localData = JSON.parse(localData)
      return localData;
    }else{
      return { }
    }
  }

  onLogout(){
    localStorage.clear()
    this.router.navigateByUrl('login')
  }
}
