import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenewbookingComponent } from './createnewbooking/createnewbooking.component';
import { CreatenewproductComponent } from './createnewproduct/createnewproduct.component';
import { CreatenewuserComponent } from './createnewuser/createnewuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListbookingsComponent } from './listbookings/listbookings.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ListservicerequestsComponent } from './listservicerequests/listservicerequests.component';
import { ListuserComponent } from './listuser/listuser.component';

import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserComponent } from './user/user.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewreportsComponent } from './viewreports/viewreports.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'user',component:UserComponent},
  {path:'product',component:ProductComponent},
  {path:'service',component:ServiceComponent},
  {path:'profile',component:ProfileComponent},
  {path:'listuser',component:ListuserComponent},
  {path:'createnewuser',component:CreatenewuserComponent},
  {path:'viewuser',component:ViewuserComponent},
  {path:'updateuser',component:UpdateuserComponent},
  {path:'product',component:ProductComponent},
  {path:'listproduct',component:ListproductComponent},
  {path:'viewproduct',component:ViewproductComponent},
  {path:'createnewproduct',component:CreatenewproductComponent},
  {path:'listbookings',component:ListbookingsComponent},
  {path:'viewbookings',component:ViewbookingsComponent},
  {path:'createnewbooking',component:CreatenewbookingComponent},
  {path:'listservicerequests',component:ListservicerequestsComponent},
  {path:'viewreports',component:ViewreportsComponent},
  {path:'updateuser/:id',component:UpdateuserComponent},
  {path:'updateproduct/:id',component:UpdateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
