import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class TokenserviceService {

  u:User={
    id: 0,
    name: '',
    password: '',
    email: '',
    mobile: null,
    registeredDate: new Date(),
    token: '',
    role:''
  }
  constructor() { }
  
  

}
