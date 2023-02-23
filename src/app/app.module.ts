import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { CreatenewuserComponent } from './createnewuser/createnewuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CreatenewproductComponent } from './createnewproduct/createnewproduct.component';
import { ListbookingsComponent } from './listbookings/listbookings.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { CreatenewbookingComponent } from './createnewbooking/createnewbooking.component';
import { ListservicerequestsComponent } from './listservicerequests/listservicerequests.component';
import { ViewreportsComponent } from './viewreports/viewreports.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminserviceComponent } from './adminservice/adminservice.component';
import { ViewservicerequestsComponent } from './viewservicerequests/viewservicerequests.component';
import { UproductComponent } from './uproduct/uproduct.component';
import { UlistproductComponent } from './ulistproduct/ulistproduct.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { AupdateproductComponent } from './aupdateproduct/aupdateproduct.component';
import { AupdatebookingComponent } from './aupdatebooking/aupdatebooking.component';
import { ListreportsComponent } from './listreports/listreports.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { TokenInterceptorService } from './token.interceptor.service';
import { NgToastModule } from 'ng-angular-popup';
import { MyreportsComponent } from './myreports/myreports.component';
import { AviewreportComponent } from './aviewreport/aviewreport.component';




const routes: Routes = [
  
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'user',component:UserComponent},
  {path:'product',component:ProductComponent},
  {path:'service',component:ServiceComponent},
  {path:'profile',component:ProfileComponent},
  {path:'listuser',component:ListuserComponent},
  {path:'createnewuser',component:CreatenewuserComponent},
  {path:'updateuser',component:UpdateuserComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    UserComponent,
    ProductComponent,
    ServiceComponent,
    ProfileComponent,
    ListuserComponent,
    ViewuserComponent,
    CreatenewuserComponent,
    UpdateuserComponent,
    ListproductComponent,
    ViewproductComponent,
    CreatenewproductComponent,
    ListbookingsComponent,
    ViewbookingsComponent,
    CreatenewbookingComponent,
    ListservicerequestsComponent,
    ViewreportsComponent,
    UpdateproductComponent,
    LoginComponent,
    AdmindashboardComponent,
    AdminserviceComponent,
    ViewservicerequestsComponent,
    UproductComponent,
    UlistproductComponent,
    MybookingsComponent,
    AupdateproductComponent,
    AupdatebookingComponent,
    ListreportsComponent,
    DeleteproductComponent,
    MyreportsComponent,
    AviewreportComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgToastModule

   
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
