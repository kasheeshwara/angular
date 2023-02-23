import { HttpClient, HttpErrorResponse, HttpHeaders ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Bookings } from './Models/Bookings';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  ulist:any;
  u:Bookings={id:0,productId:0,userId:0,reqDate:new Date(),problem:"",description:"",status:""};
  url:string="https://localhost:44347/api/ServiceRequests";
  ur:string="https://localhost:44347/api/ServiceByName";
  urll:string="https://localhost:44347/api/ServiceRequests/";
  
  constructor(private httpclient:HttpClient) { }

  getbookings():Observable<Bookings[]>{
    this.ulist=this.httpclient.get(this.url);
    return this.ulist;
  }



  getbooking(id:number):Observable<Bookings>
  {
    
    return this.httpclient.get<Bookings>(this.url+"/"+id);
  }

  getuserbookings(id:number):Observable<Bookings>
  {
    
    return this.httpclient.get<Bookings>(this.ur+"/"+id);
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

  //   editbooking(id:number,u:Bookings):Observable<Bookings>
  // {
  //   return this.httpclient.put<Bookings>(this.url+"/"+id,u,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
        
  //     })
  //   });
  // }
    
  updateBooking(id: number, booking: Bookings): Observable<Bookings> {
    const url = `${this.url}/${id}`;
    return this.httpclient.put<Bookings>(url, booking, {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    }).pipe(
      tap(_ => console.log(`Updated booking with id=${id}`)),
      
    );
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
