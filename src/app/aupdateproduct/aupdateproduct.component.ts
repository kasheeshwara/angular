import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
import { Bookings } from '../Models/Bookings';
import { Reports } from '../Models/Reports';
import { ReportsService } from '../reports.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-aupdateproduct',
  templateUrl: './aupdateproduct.component.html',
  styleUrls: ['./aupdateproduct.component.css']
})
export class AupdateproductComponent {
  user: Reports={id:0,serReqId:0,reportDate:new Date(),serviceType:"",actionTaken:"",diagnosisDetails:"",isPaid:"",visitFees:0,repairDetails:""};
  // u:Bookings={id:0,productId:0,userId:0,reqDate:new Date(),problem:"",description:"",status:""};
 rid:any;
  message: string="";
  serReqId:number=0;
  u:any;
constructor(private userservice:UserService,private route:Router,
  private router:ActivatedRoute,private reportservice:ReportsService,private bookingservice:BookingsService){
    this.rid=this.router.snapshot.paramMap.get('id');
  //   const pId = this.router.snapshot.paramMap.get('id');
  // if(pId !== null){
  //   const proId=Number(pId);
  //   this.user.serReqId=proId;
  // }
  }
  ngOnInit(): void {
    const pId = this.router.snapshot.paramMap.get('id');
    if(pId !== null){
      const proId=Number(pId);
      this.user.serReqId=proId;
    }
    
    // this.reportservice.addreport(this.u).subscribe(
    //   data=>{
    //     this.user=data;
    //     console.log(this.user);
    //   }
     
    // )
    // const abc=localStorage.getItem('bookingId');
    // if(abc !== null){
    //   const xyz=Number(abc);
    //   this.user.serReqId=xyz;
    // }
  }
  updateReportDetails(user:Reports){
    
  //   this.reportservice.Editreport(id,user).subscribe(
  //     data=>{
  //              alert("User Details Updated Succefully");
      
  //     }
  //   )
  // }
  this.serReqId=this.user.serReqId
  if (this.user.serReqId !== null) { // Check if id is not null before calling editreport method
    this.reportservice.addreport(this.user).subscribe(
      data => {
        console.log(data);
        alert("Report Updated Successfully");
        
      }
    );
  }
}
}
