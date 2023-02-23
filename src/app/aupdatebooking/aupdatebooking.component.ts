import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
import { Bookings } from '../Models/Bookings';
import { ReportsService } from '../reports.service';
import { UpdatebookingService } from '../updatebooking.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-aupdatebooking',
  templateUrl: './aupdatebooking.component.html',
  styleUrls: ['./aupdatebooking.component.css']
})
export class AupdatebookingComponent {
  product: Bookings={id:0,productId:0,userId:0,reqDate:new Date(),problem:"",description:"",status:""};
  id:any;
  message: string="";
  
constructor(private bookingservice:BookingsService,private route:Router,
  private router:ActivatedRoute,private updatebooking:UpdatebookingService){
    this.id=this.router.snapshot.paramMap.get('id');
    
  }
  ngOnInit(): void {
    // this.bookingservice.getbooking(this.id).subscribe(
    //   data=>{
    //     this.product=data;
    //     console.log(this.product);
    //   }
    // )
    this.bookingservice.getbooking(this.id).subscribe(booking => {
      this.product = booking;
      
    });
  }
  updateDetails(product:Bookings){
     let id=product.id;
   
    this.updatebooking.updateBooking(this.product).subscribe(
      data=>{
               alert("Booking status Updated Successfully");
               console.log(product);
      }
    )
  }
 }

