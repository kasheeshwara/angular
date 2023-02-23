import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './Models/User';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers:any={ 'Content-Type':'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Method':'*'
  }
 to:any;
  private baseUrl:string = "https://localhost:44347/api/User";
  private baseUr:string = "https://localhost:44347/api/Users";
  private jwtHelper: JwtHelperService = new JwtHelperService();
  //return this.httpclient.post<User>(this.url,u,{
  //  headers:new HttpHeaders(this.headers)
  constructor(private http:HttpClient,
    private router:Router) { }

  signUp(u:any){
    //this.user.id=0;
    return this.http.post<any>(this.baseUr+"/register",u,{
      headers:new HttpHeaders(this.headers)
    });
  }

  login(loginObj:any){
    return this.http.post<any>(this.baseUrl+"/authenticate",loginObj).pipe(
      tap(token =>this.storeToken('token'))
    )
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }
  // storeToken(tokenValue:string){
  //   localStorage.setItem(,tokenValue);
    
  // }

  signOut()
  { 
    //localStorage.clear();
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
  
  isloggedIn():boolean{
    // const token = this.getToken();
    // if (!token) return false;

    // const expiration = this.getTokenExpiration();
    //  if (!expiration || expiration <= new Date()) return false;

    // return true;
   // return !!localStorage.getItem('token')

   const token = this.getToken();
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;

  }

 
  
  getToken(){
     this.to=localStorage.getItem('token')
    console.log(this.to);
     return this.to;
   }
  //getToken(): Observable<string> {
    //return this.http.post<TokenApiModel>("api/token",{}).pipe(
      //map((res:TokenApiModel)=>res.token)
    //);
  //}
  // getTokenExpiration(){
  //   const token = this.getToken();
  //   if (!token) return null;

  //   const tokenInfo = JSON.parse(atob(token.split('.')[1]));
  //   const expiration = new Date(tokenInfo.exp * 1000);

  //   return expiration;
  // }

  getRole(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      if(decodedToken.role==='admin'){

return true;
}
}
 
    return false;
  }

  // isAdmin(): boolean {
  //   const role = this.getRole();
  //   return role === 'admin';
  // }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }
// isUserLoggedIn():boolean{
// const token=localStorage.getItem('token')
// return token !== null
// }


}
