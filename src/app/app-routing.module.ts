import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminserviceComponent } from './adminservice/adminservice.component';
import { AupdatebookingComponent } from './aupdatebooking/aupdatebooking.component';
import { AupdateproductComponent } from './aupdateproduct/aupdateproduct.component';
import { AviewreportComponent } from './aviewreport/aviewreport.component';
import { CreatenewbookingComponent } from './createnewbooking/createnewbooking.component';
import { CreatenewproductComponent } from './createnewproduct/createnewproduct.component';
import { CreatenewuserComponent } from './createnewuser/createnewuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { AuthGuard } from './guards/auth.guard';
import { UserGuardGuard } from './guards/user-guard.guard';
import { ListbookingsComponent } from './listbookings/listbookings.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ListreportsComponent } from './listreports/listreports.component';
import { ListservicerequestsComponent } from './listservicerequests/listservicerequests.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { MyreportsComponent } from './myreports/myreports.component';

import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { UlistproductComponent } from './ulistproduct/ulistproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UproductComponent } from './uproduct/uproduct.component';
import { UserComponent } from './user/user.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewreportsComponent } from './viewreports/viewreports.component';
import { ViewservicerequestsComponent } from './viewservicerequests/viewservicerequests.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  
  {path:'dashboard',component:DashboardComponent},
  {path:'user',component:UserComponent,canActivate:[AuthGuard]},
  {path:'product',component:ProductComponent,canActivate:[AuthGuard]},
  {path:'service',component:ServiceComponent,},
  {path:'profile',component:ProfileComponent},
  {path:'listuser',component:ListuserComponent,canActivate:[AuthGuard]},
  {path:'createnewuser',component:CreatenewuserComponent,canActivate:[AuthGuard]},
  {path:'viewuser/:id',component:ViewuserComponent,canActivate:[AuthGuard]},
  {path:'updateuser',component:UpdateuserComponent,canActivate:[AuthGuard]},
  {path:'product',component:ProductComponent,canActivate:[AuthGuard]},
  {path:'listproduct',component:ListproductComponent,canActivate:[AuthGuard]},
  {path:'viewproduct/:id',component:ViewproductComponent,canActivate:[AuthGuard]},
  {path:'createnewproduct',component:CreatenewproductComponent,canActivate:[AuthGuard]},
  {path:'listbookings',component:ListbookingsComponent,canActivate:[AuthGuard]},
  {path:'viewbookings/:id',component:ViewbookingsComponent,canActivate:[AuthGuard]},
  {path:'createnewbooking',component:CreatenewbookingComponent,canActivate:[AuthGuard]},
  {path:'listservicerequests',component:ListservicerequestsComponent,canActivate:[AuthGuard]},
  {path:'viewreports',component:ViewreportsComponent,canActivate:[AuthGuard]},
  {path:'updateuser/:id',component:UpdateuserComponent,canActivate:[AuthGuard]},
  {path:'updateproduct/:id',component:UpdateproductComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admindashboard',component:AdmindashboardComponent,canActivate:[AuthGuard]},
  {path:'adminservice',component:AdminserviceComponent,canActivate:[AuthGuard]},
  {path:'viewservicerequests/:id',component:ViewservicerequestsComponent,canActivate:[AuthGuard]},
  {path:'uproduct',component:UproductComponent,canActivate:[AuthGuard]},
  {path:'ulistproduct',component:UlistproductComponent},
  {path:'mybookings',component:MybookingsComponent,canActivate:[UserGuardGuard]},
  {path:'aupdateproduct/:id',component:AupdateproductComponent,canActivate:[AuthGuard]},
  {path:'aupdatebooking/:id',component:AupdatebookingComponent,canActivate:[AuthGuard]},
  {path:'listreports',component:ListreportsComponent,canActivate:[AuthGuard]},
  {path:'deleteproduct/:id',component:DeleteproductComponent,canActivate:[AuthGuard]},
  {path:'createnewbooking/:id',component:CreatenewbookingComponent},
  {path:'myreports/:id',component:MyreportsComponent},
  {path:'aviewreport/:id',component:AviewreportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
