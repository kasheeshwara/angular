import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router,private toast:NgToastService){}
  canActivate() :boolean {
    if(this.auth.isloggedIn())
    {
     
        return true;
      
      //return true;
    }
    else{
      this.router.navigate(['login'])
      this.toast.error({detail:"Warning" ,summary:"You are Not Authorised,Please Login",duration:5000});
      return false;
    }
  }
  
}
