import { Component } from '@angular/core';
import { Reports } from '../Models/Reports';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-listreports',
  templateUrl: './listreports.component.html',
  styleUrls: ['./listreports.component.css']
})
export class ListreportsComponent {
  u:Reports={id:0,serReqId:0,reportDate:new Date(),serviceType:"",actionTaken:"",diagnosisDetails:"",isPaid:"",visitFees:0,repairDetails:""};
  ulist:any;
  constructor(private reportservice:ReportsService) { }

  ngOnInit(): void {
   
    
    this.reportservice.getreports().subscribe(
      data=>{
        this.ulist=data;
        console.log(this.ulist);
      });
    
}
}
