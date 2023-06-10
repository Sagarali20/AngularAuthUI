import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ='http://localhost:5275/api/User/';

  private userPayload:any;

  constructor(private http: HttpClient) {

    this.userPayload=this.deCodedToken();
    console.log("sagar");

    console.log(this.userPayload);
   }

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
  deCodedToken()
  {
    const jwthelper= new JwtHelperService();
    const token = this.getToken()!;
    return jwthelper.decodeToken(token);
  }
  getfullnameFromtoken()
  {
     if(this.userPayload)
     return this.userPayload.unique_name;
  }
  getroleFromToken()
  {
    if(this.userPayload)
    return this.userPayload.roel;
  }
}
