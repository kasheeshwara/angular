import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/User';
import { UserService } from '../user.service';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent  implements OnInit{
  id: any;
  user: User={id:0,name:"",password:"",email:"",mobile:null,registeredDate: new Date(),token:"",role:""};

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
  // getUserDetails(user:User){
  //   let id=user.id;
  //   this.userservice.Edituser(id,user).subscribe(
  //     data=>{
  //              alert("User Details Updated Succefully");
      
  //     }
  //   )
  // }


  
}
  

