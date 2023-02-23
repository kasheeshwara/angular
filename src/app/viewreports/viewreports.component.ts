import { Component } from '@angular/core';
import { Reports } from '../Models/Reports';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-viewreports',
  templateUrl: './viewreports.component.html',
  styleUrls: ['./viewreports.component.css']
})
export class ViewreportsComponent {
  id: any;
  user: Reports={id:0,serReqId:0,reportDate:new Date(),serviceType:"",actionTaken:"",diagnosisDetails:"",isPaid:"",visitFees:0,repairDetails:""};

constructor(private reportsservice:ReportsService){}
  ngOnInit(): void {
    
  }
  getReportDetails(): void {
    this.reportsservice.getreport(this.id).subscribe(
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
