import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private auth:AuthService,
    private router:Router) {}

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const myToken = this.auth.to;   // this.auth.getToken()   localStorage.getItem('token')
    console.log('Token:',myToken);
    if(myToken !==undefined)
    {
      request = request.clone({
        setHeaders:{Authorization:`Bearer ${myToken}`}    // "Bearer "+myToken
      });
    }
        return next.handle(request)
        .pipe(catchError((err)=>{
          if(err instanceof HttpErrorResponse){
           if(err.status === 401)   { 
            console.log("Token Expired,Please Login Again");
                                alert("Token Expired,Please Login Again");
          this.router.navigate(['login'])
         }
        }
         return throwError(()=> new Error("Some other error occured"));
           } ) 
          );


         } 
       } 
    
    //.pipe(
      //    catchError((error)=>{
      //   //   if(err instanceof HttpErrorResponse){ 
      //        if(error.status === 401){
      //         this.auth.signOut();
      //          this.toast.warning({detail:"Warning",summary:"Token is expired, Please Login again"});
      //           this.router.navigate(['login']),{
      //             queryParams:{expired:true},
      //           }}
              
// // //              return this.handleUnAuthorizedError(request,next);
          //  }else{
          //   console.log('Some other Error occurred');
          //   console.log(err);
          //  }
          
         //})
  //       return throwError(error);//()=> new Error("Some other error occured"));
  //        } )     
       
  //    );   
  //   }
  // }    
  
// //     handleUnAuthorizedError(req:HttpRequest<any>, next:HttpHandler){
// //       let tokenApiModel = new TokenApiModel();
// //       tokenApiModel.accessToken = this.auth.getToken()!;
// //       // tokenApiModel.refreshToken =  this.auth.getRefreshToken()!;
// //       // return this.auth.renewToken(tokenApiModel)
// //       // .pipe(
// //       //   switchMap((data:TokenApiModel)=>{
// //       //     this.auth.storeRefreshToken(data.refreshToken);
// //       //     this.auth.storeToken(data.accessToken);
// //       //     req = req.clone({
// //       //       setHeaders:{Authorization:`Bearer ${data.accessToken}`}   // "Bearer "+myToken
// //       //     })
// //           return next.handle(req);
        
// //         catchError((err)=>{
// //           return throwError(()=>{
// //             this.toast.warning({detail:"Warning",summary:"Token is expired, Please Login again"});
// //                 this.router.navigate(['login'])
// //           })
// //         })
      
      
// //   }
     


