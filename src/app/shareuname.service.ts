import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})
export class ShareunameService {
 
    
  
  constructor(private http:HttpClient,
    private router:Router) { 
    
  }
}
