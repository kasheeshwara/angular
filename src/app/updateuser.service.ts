import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})
export class UpdateuserService {
 user:User={
   id: 0,
   name: '',
   password: '',
   email: '',
   mobile: null,
   registeredDate: new Date(),
   token: '',
   role:""
 }
  private baseUrl = 'https://localhost:44347/api/Users';

  constructor(private httpclient: HttpClient) { }

  updateUserProfile(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpclient.put<User>(url, user, httpOptions) ;
  }

  // private handleError(error: any) {
  //   console.error(error);
  //   return Observable.throw(error);
  // }
}
