import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  token:String=''
  constructor(private http:HttpClient,private route:Router) { }

  authenticate(name:String,pass:String){
    return this.http.post("http://localhost:8084/api/auth/login",{userid:name,password:pass})
  }
isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  let token=sessionStorage.getItem('token')
  console.log(token);
  if(token!==null && token.length>6){
    return true;
  }
  return !(token === null)
}
 
logOut() {
  sessionStorage.removeItem('username')
  sessionStorage.removeItem('token')
  this.route.navigate(['login'])
}
sessionExpired(){
  sessionStorage.removeItem('username')
  sessionStorage.removeItem('token')
}
}
