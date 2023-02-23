import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  constructor(private authservice:AuthService){}
  ngOnInit(): void {
  
}
logOut(){
  this.authservice.signOut();
}
}
