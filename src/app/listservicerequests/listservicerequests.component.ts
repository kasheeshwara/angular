import { Component } from '@angular/core';
import { Reports } from '../Models/Reports';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-listservicerequests',
  templateUrl: './listservicerequests.component.html',
  styleUrls: ['./listservicerequests.component.css']
})
export class ListservicerequestsComponent {
  ulist: Reports[] = [];
  
  constructor(private reportsservice:ReportsService) { }

  ngOnInit(): void {
   
    
    this.reportsservice.getreports().subscribe(
      data=>{
        this.ulist=data;
        console.log(this.ulist);
      });
    
}
}