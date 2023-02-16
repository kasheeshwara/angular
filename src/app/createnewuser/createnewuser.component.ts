import { Component,OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../user.service';
@Component({
  selector: 'app-createnewuser',
  templateUrl: './createnewuser.component.html',
  styleUrls: ['./createnewuser.component.css']
})
export class CreatenewuserComponent implements OnInit{
  u:User={id:0,name:"",password:"",email:"",mobile:null,registeredDate:new Date()};
  x:any;
  
message:string="";
constructor(private userservice:UserService) { }
ngOnInit(): void {
}

saveproduct():void
{
  
 this.userservice.adduser(this.u).subscribe(
   {
    next:(User)=>
    console.log(User),
    
    
  }
 ) 
  console.log(this.u);
  
}
  
}
