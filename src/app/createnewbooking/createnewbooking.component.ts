import { Component } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { Bookings } from '../Models/Bookings';

@Component({
  selector: 'app-createnewbooking',
  templateUrl: './createnewbooking.component.html',
  styleUrls: ['./createnewbooking.component.css']
})
export class CreatenewbookingComponent {
  u:Bookings={id:null,productId:null,userId:null,reqDate:new Date(),problem:"",description:"",status:""};
  x:any;
  
message:string="";
constructor(private bookingsservice:BookingsService) { }
ngOnInit(): void {
}

savebooking():void
{
  
 this.bookingsservice.addbooking(this.u).subscribe(
   {
    next:(Bookings)=>
    console.log(Bookings),
    
    
  }
 ) 
  console.log(this.u);
  
}
}
