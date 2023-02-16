import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  
  user: User={id:0,name:"",password:"",email:"",mobile:null,registeredDate: new Date()};
  id:any;
  message: string="";
constructor(private userservice:UserService,private route:Router,
  private router:ActivatedRoute){
    this.id=this.router.snapshot.paramMap.get('id');
    
  }
  ngOnInit(): void {
    this.userservice.getuser(this.id).subscribe(
      data=>{
        this.user=data;
        console.log(this.user);
      }
    )
  }
  updateUserDetails(user:User){
    let id=user.id;
    this.userservice.Edituser(id,user).subscribe(
      data=>{
               this.message="User Details Updated Successfully";
      
      }
    )
  }
}
