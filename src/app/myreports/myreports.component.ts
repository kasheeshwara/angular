import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Reports } from '../Models/Reports';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-myreports',
  templateUrl: './myreports.component.html',
  styleUrls: ['./myreports.component.css']
})
export class MyreportsComponent implements OnInit{
  uname:any;
  id:any;
  u:Reports={id:0,serReqId:0,reportDate:new Date(),serviceType:"",actionTaken:"",diagnosisDetails:"",isPaid:"",visitFees:0,repairDetails:""};
  na:any;
constructor(private authservice:AuthService,private reportservice:ReportsService,private route:Router,
  private router:ActivatedRoute){
    this.id=this.router.snapshot.paramMap.get('id');
}
ngOnInit(): void {
  
    this.reportservice.getuserreport(this.id).subscribe(
      data=>{
        this.u=data;
        console.log(this.u.id)
        console.log(this.u);
      });
  } 

}
