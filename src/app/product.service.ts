import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from './Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 id:any;
  ulist:any;
  u:Product={id:0,name:"",make:"",model:"",cost:null, createdDate:new Date()};
  url:string="https://localhost:44306/api/Products";
  headers:any={ 'Content-Type':'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Method':'*'
  };
  
  constructor(private httpclient:HttpClient) { }

  getproducts():Observable<Product[]>{
    this.ulist=this.httpclient.get(this.url);
    return this.ulist;
  }

  getproduct(id:number):Observable<Product>
  {
    
    return this.httpclient.get<Product>(this.url+"/"+id);
  }
  addproduct(u:Product):Observable<Product>
  {
    u.id=0;
    return this.httpclient.post<Product>(this.url,u,{
      headers:new HttpHeaders(this.headers)
    });
  }

    Editproduct(id:number,u:Product):Observable<Product>
  {
    return this.httpclient.put<Product>(this.url+"/"+id,u,{
      headers:new HttpHeaders(this.headers)
    });
  }
    
  Deleteproduct(id:number):Observable<Product>
  {
    return this.httpclient.delete<Product>(this.url+"?id="+id,{
      headers:new HttpHeaders(this.headers)
      
    });
    this.getproducts();
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
