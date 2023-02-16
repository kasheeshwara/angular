import { Component,OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../user.service';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent  implements OnInit{
  id: any;
  user: User={id:0,name:"",password:"",email:"",mobile:null,registeredDate: new Date()};

constructor(private userservice:UserService){}
  ngOnInit(): void {
    
  }
  getUserDetails(): void {
    this.userservice.getuser(this.id).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
      },
      error => {
        console.log(error);
      }
    );
  }


  
}
  

