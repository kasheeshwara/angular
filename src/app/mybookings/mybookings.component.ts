import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookingsService } from '../bookings.service';
import { ShareunameService } from '../shareuname.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
  uname:any;
  bookingids:number[]=[];
  na:any;
  constructor(private authservice:AuthService,private shareservice:ShareunameService,private route:Router,
    private router:ActivatedRoute,private userservice:UserService,private bookingsservice:BookingsService){}

    ngOnInit(): void {
      
      const userIdString = localStorage.getItem('userId');
      if (userIdString !== null) {
        const userId = parseInt(userIdString);
        this.bookingsservice.getuserbookings(userId).subscribe(
          data=>{
            this.na=data;
           
            const bookingId=this.na.id;
            console.log(bookingId)
            console.log(localStorage.setItem('bookingId',this.na.id))
          });
      } 
     
      
      // this.bookingsservice.getuserbookings().subscribe(
      //   data=>{
      //     this.na=data;
      //     console.log(this.na);
      //   });
    }
      
}
// this.uname=localStorage.getItem('name');