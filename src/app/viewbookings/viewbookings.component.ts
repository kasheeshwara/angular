import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
import { Bookings } from '../Models/Bookings';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.css']
})
export class ViewbookingsComponent implements OnInit {
  id: any;
  user:Bookings={id:0,productId:0,userId:0,reqDate:new Date(),problem:"",description:"",status:""};

constructor(private bookingsservice:BookingsService,private route:Router,
  private router:ActivatedRoute){
    this.id=this.router.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.bookingsservice.getbooking(this.id).subscribe(
      data=>{
        this.user=data;
        console.log(this.user);
      }
    )
  }
  // getProductDetails(): void {
  //   this.bookingsservice.getbooking(this.id).subscribe(
  //     data => {
  //       this.user = data;
  //       console.log(this.user);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
}
