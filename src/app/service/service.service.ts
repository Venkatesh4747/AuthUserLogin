import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  proceedLogin(data:any){
    return this.http.post('https://d8c7-103-219-207-161.ngrok.io/api/auth/login',data)
  }
  isLoggedIn(){
return localStorage.getItem('token')!=null
  }
  getToken(){
    return localStorage.getItem('token')||''
  }
  haveAccess(){
    var logginToken=localStorage.getItem('token') ||'';
    var extractToken=logginToken.split('.')[1];
    var atobdata=atob(extractToken);
    var finalData= JSON.parse(atobdata)
    console.log('finalData',finalData);

  }
}
