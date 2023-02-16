import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Bookings } from './Models/Bookings';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  ulist:any;
  u:Bookings={id:null,productId:null,userId:null,reqDate:new Date(),problem:"",description:"",status:""};
  url:string="https://localhost:44306/api/ServiceRequests";

  
  constructor(private httpclient:HttpClient) { }

  getbookings():Observable<Bookings[]>{
    this.ulist=this.httpclient.get(this.url);
    return this.ulist;
  }

  getbooking(id:number):Observable<Bookings>
  {
    
    return this.httpclient.get<Bookings>(this.url+"/"+id);
  }
  addbooking(u:Bookings):Observable<Bookings>
  {
    u.id=0;
    return this.httpclient.post<Bookings>(this.url,u,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

    Editbooking(id:number,u:Bookings):Observable<Bookings>
  {
    return this.httpclient.put<Bookings>(this.url+"?id="+id,u,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }
    
  Deletebooking(id:number):Observable<Bookings>
  {
    return this.httpclient.delete<Bookings>(this.url+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
      
    });
    this.getbookings();
  }

  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }
}
