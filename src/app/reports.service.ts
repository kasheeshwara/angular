import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Reports } from './Models/Reports';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  ulist:any;
  u:Reports={id:0,serReqId:0,reportDate:new Date(),serviceType:"",actionTaken:"",diagnosisDetails:"",isPaid:"",visitFees:0,repairDetails:""};
  url:string="https://localhost:44347/api/ServiceRequestReports";
  url1:string="https://localhost:44347/api/ServiceRequestReports/id"
  reportUrl:string="https://localhost:44347/api/Reports"
  
  constructor(private httpclient:HttpClient) { }

  getreports():Observable<Reports[]>{
    this.ulist=this.httpclient.get(this.url);
    return this.ulist;
  }

  getreport(id:number):Observable<Reports>
  {
    
    return this.httpclient.get<Reports>(this.url+"/"+id);
  }
  getuserreport(id:number):Observable<Reports>
  {
    
    return this.httpclient.get<Reports>(this.reportUrl+"/"+id);
  }
  addreport(u:Reports):Observable<Reports>
  {
    u.id=0;
    return this.httpclient.post<Reports>(this.url,u,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

  addreports(report:Reports):Observable<Reports>
  {
    
    return this.httpclient.post<Reports>(this.url,report,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

    Editreport(id:number,u:Reports):Observable<Reports>
  {
    return this.httpclient.put<Reports>(this.url+"?id="+id,u,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }
    
  Deletereport(id:number):Observable<Reports>
  {
    return this.httpclient.delete<Reports>(this.url+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
      
    });
    this.getreports();
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
