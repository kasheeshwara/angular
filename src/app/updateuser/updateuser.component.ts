import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/User';
import { UpdateuserService } from '../updateuser.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  
  user: User={id:0,name:"",password:"",email:"",mobile:null,registeredDate: new Date(),token:"",role:""};
  id:any;
  message: string="";
constructor(private userservice:UserService,private route:Router,
  private router:ActivatedRoute,private updateuserservice:UpdateuserService){
    this.id=this.router.snapshot.paramMap.get('id');
   
  }
  ngOnInit(): void {
    // this.userservice.getuser(this.id).subscribe(
    //   data=>{
    //     this.user=data;
    //     console.log(this.user);
    //   }
    // )
    this.userservice.getuser(this.id).subscribe(booking => {
      this.user = booking;
      console.log(this.user);
    });
  }
  updateUserDetails(user:User){
    // let id=user.id;
    this.updateuserservice.updateUserProfile(user).subscribe(
      data=>{
               alert("User Details Updated Succefully");
      
      }
    )
  }
}
