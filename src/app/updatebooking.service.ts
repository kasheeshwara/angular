import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Bookings } from './Models/Bookings';
import { Product } from './Models/Product';

@Injectable({
  providedIn: 'root'
})
export class UpdatebookingService {
 
  private baseUrl = 'https://localhost:44347/api/ServiceRequests';
  private baseUrl1="https://localhost:44347/api/Products"
  constructor(private http: HttpClient) { }

  updateBooking(booking: Bookings): Observable<Bookings> {
    const url = `${this.baseUrl}/${booking.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Bookings>(url, booking, httpOptions) ;
    // console.log(booking);
  }

  // private handleError(error: any) {
  //   console.error(error);
  
  //   (error);
  updateProduct(booking: Product): Observable<Product> {
    const url = `${this.baseUrl1}/${booking.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Product>(url, booking, httpOptions) ;
    // console.log(booking);
  }


}
