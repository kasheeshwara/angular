import { Component } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { Bookings } from '../Models/Bookings';

@Component({
  selector: 'app-listbookings',
  templateUrl: './listbookings.component.html',
  styleUrls: ['./listbookings.component.css']
})
export class ListbookingsComponent {
  ulist: Bookings[] = [];
  
  constructor(private bookingsservice:BookingsService) { }

  ngOnInit(): void {
   
    
    this.bookingsservice.getbookings().subscribe(
      data=>{
        this.ulist=data;
        console.log(this.ulist);
      });
    
}
}
