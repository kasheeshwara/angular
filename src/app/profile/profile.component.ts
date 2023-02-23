import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { ShareunameService } from '../shareuname.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
 uname:any;
 
 na:any;
//user=localStorage.getItem('name');
  constructor(private authservice:AuthService,private shareservice:ShareunameService,private route:Router,
    private router:ActivatedRoute,private userservice:UserService){
  //   this.uname=localStorage.getItem('name');
  //  this.na=this.router.snapshot.paramMap.get(this.uname);
  }
  ngOnInit(): void {
  //   if(this.uname){
  //   this.userservice.getuserstr(this.na).subscribe(
  //     data=>{
  //       this.na=data;
  //       console.log(this.na);
  //     },
  //     error=>{
  //       console.log('Error',error);
  //     }
      
  //   );
  // }
  this.uname=localStorage.getItem('name');
  this.userservice.getuserstr(this.uname).subscribe(
       data=>{
         this.na=data;
        //  const userId = this.na.id;
        localStorage.setItem('userId', this.na.id.toString());
         console.log(this.na);
}

  );
 
//   localStorage.setItem('userId',id);
}
}
