import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ='http://localhost:5275/api/User/';

  constructor(private http: HttpClient) { }

  signUp(userObj:any)
  {
     return this.http.post<any>(`${this.baseUrl}register`,userObj);

  }

  logIn(loginobj:any)
  { 
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginobj);
  }

  storeToken(tokenvalue:string)
  {
        localStorage.setItem('token',tokenvalue);
  }
  getToken()
  {
    return localStorage.getItem('token');
  }

  isLoggedIn():boolean
  { 
    return !!localStorage.getItem('token');
  }
  signOut()
  {
    localStorage.clear();
  }
}
