import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './Models/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  ulist:any;
  u:User={id:0,name:"",password:"",email:"",mobile:null,registeredDate:new Date(),token:"",role:""};
  url:string="https://localhost:44347/api/Users";
  urlstr:string="https://localhost:44347/api/UserByName";
  headers:any={ 'Content-Type':'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Method':'*'
  }
  
  id: any;
  
  constructor(private httpclient:HttpClient) { }

  getusers():Observable<User[]>{
    this.ulist=this.httpclient.get(this.url);
    return this.ulist;
  }

  getuser(id:number):Observable<User>
  {
    
    return this.httpclient.get<User>(this.url+"/"+id);
  }

  getuserstr(name:string):Observable<User>
  {
    
    return this.httpclient.get<User>(this.urlstr+"/"+name);
  }
  adduser(u:User):Observable<User>
  {
    u.id=0;
    return this.httpclient.post<User>(this.url,u,{
      headers:new HttpHeaders(this.headers)
    });
  }

    Edituser(id:number,u:User):Observable<User>
  {
    return this.httpclient.put<User>(this.url+"/"+id,u,{
      headers:new HttpHeaders(this.headers)
    });
  }

  
    
  Deleteuser(id:number):Observable<User>
  {
    return this.httpclient.delete<User>(this.url+"?id="+id,{
      headers:new HttpHeaders(this.headers)
      
    });
    this.getusers();
  }

  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }
  findemp(id:string):any{
    this.id=Number(id);
    this.u=this.ulist.find((x: { id: any; })=>x.id==this.id);
    return this.u;
  }

}
