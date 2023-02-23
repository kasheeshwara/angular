import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Reports } from '../Models/Reports';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-aviewreport',
  templateUrl: './aviewreport.component.html',
  styleUrls: ['./aviewreport.component.css']
})
export class AviewreportComponent implements OnInit {
  u:Reports={id:0,serReqId:0,reportDate:new Date(),serviceType:"",actionTaken:"",diagnosisDetails:"",isPaid:"",visitFees:0,repairDetails:""};
  ulist:any;
  id:any;
  constructor(private auth:AuthService,private reportservice:ReportsService,private route:Router,private router:ActivatedRoute){
this.id=this.router.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.reportservice.getreport(this.id).subscribe(
      data=>{
        this.u=data;
        console.log(this.u)
      }
    )
  }

}
