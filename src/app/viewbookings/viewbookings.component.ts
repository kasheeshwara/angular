import { Component } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { Bookings } from '../Models/Bookings';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.css']
})
export class ViewbookingsComponent {
  id: any;
  user:Bookings={id:null,productId:null,userId:null,reqDate:new Date(),problem:"",description:"",status:""};

constructor(private bookingsservice:BookingsService){}
  ngOnInit(): void {
    
  }
  getProductDetails(): void {
    this.bookingsservice.getbooking(this.id).subscribe(
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
