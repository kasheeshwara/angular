import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reports } from '../Models/Reports';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-viewservicerequests',
  templateUrl: './viewservicerequests.component.html',
  styleUrls: ['./viewservicerequests.component.css']
})
export class ViewservicerequestsComponent {
  id: any;
report: Reports={
  id: 0,
  serReqId: 0,
  reportDate: new Date(),
  serviceType: '',
  actionTaken: '',
  diagnosisDetails: '',
  isPaid: '',
  visitFees: 0,
  repairDetails: ''
}

constructor(private reportservice:ReportsService,private route:Router,
  private router:ActivatedRoute){
    this.id=this.router.snapshot.paramMap.get('id');
}
  ngOnInit(): void {
    this.reportservice.getreport(this.id).subscribe(
      data=>{
        this.report=data;
        console.log(this.report);
      }
    )
  }
}
