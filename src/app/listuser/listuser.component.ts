import { Component,OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  ulist: User[] = [];
  message:string="";
  constructor(private userservice:UserService) {
    
   }

  ngOnInit(): void {
   
    
    this.userservice.getusers().subscribe(
      data=>{
        this.ulist=data;
        console.log(this.ulist);
      });
    
    
   
  }

  


}
