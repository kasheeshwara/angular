import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BookingsService } from '../bookings.service';
import { Bookings } from '../Models/Bookings';
import { User } from '../Models/User';

@Component({
  selector: 'app-createnewbooking',
  templateUrl: './createnewbooking.component.html',
  styleUrls: ['./createnewbooking.component.css']
})
export class CreatenewbookingComponent {
u:Bookings={id:0,productId:0,userId:0,reqDate:new Date(),problem:"",description:"",status:""};
 
  v:User={id:0,name:"",password:"",email:"",mobile:null,registeredDate:new Date(),token:"",role:""};
  userId:number=0;
 id:any;
message:string="";

constructor(private bookingsservice:BookingsService,private route:Router,
  private router:ActivatedRoute,private toast:NgToastService) { 
  this.u.status="pending";
  const pId = this.router.snapshot.paramMap.get('id');
  if(pId !== null){
    const proId=Number(pId);
    this.u.productId=proId;
  }
  // const uId= localStorage.getItem('userId');
  
  // this.id=this.router.snapshot.paramMap.get('id');
  // this.userId=localStorage.getItem('userId');
  // console.log(this.userId);
}
ngOnInit(): void {
  const usId= localStorage.getItem('userId');
  if(usId !== null){
  // this.u.userId=usId;
  const parsedUserId = Number(usId);
  this.u.userId=parsedUserId;
  }
  // this.bookingsservice.getbooking(this.id).subscribe(
  //   data=>{
  //     this.u=data;
  //     console.log(this.u);
  //   }
  // )
  // if(this.u.productId !== null && this.u.userId !== null){
  // this.u.productId = this.router.snapshot.paramMap.get('id');
  // this.u.userId = localStorage.getItem('userId');
  // }
  // const id = this.router.snapshot.paramMap.get('id');
  // this.u.productId = id ? parseInt(id, 10) : null;

  // const userIdStr = localStorage.getItem('userId');
  // this.u.userId = userIdStr ? parseInt(userIdStr, 10) : null;
  
  // this.bookingsservice.getbooking(this.id).subscribe(
  //   data=>{
  //     this.u=data;
  //     console.log(this.u);
  //   }
  // )
  
}

savebooking():void
{
  
 this.bookingsservice.addbooking(this.u).subscribe(
   data=>{
    // next:(Bookings)=>
    // console.log(Bookings),
    this.u=data;
    this.toast.success({detail:"Service Booked Successfully",duration:5000});
    console.log(this.u);
  }
 ) 
  
  
}
}
