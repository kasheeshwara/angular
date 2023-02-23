import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../auth.service';
import { Use } from '../Models/use';
import { User } from '../Models/User';
import ValidateForm from '../Models/validateForm';
import { ShareunameService } from '../shareuname.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 uname:any;
  
  
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  loginForm!:FormGroup;
  
  
  constructor(private fb:FormBuilder,
    private auth:AuthService,private shareduname:ShareunameService,
    private toast:NgToastService,
    private router:Router){
      
    }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText? this.eyeIcon = "fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";
  }

  onLogin()
  {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      const name = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    
    // send obj to database
    const user = {
      name: name,
      password: password
    };
    //localStorage.setItem('name',name);
    // const u={
    //  name: this.user.name,
    //   password:this.user.password
    // }
      //send obj to database
      this.auth.login(user)
      .subscribe({
        next:(res)=>{
         console.log(res.message);
        //  alert(res.message)
          this.loginForm.reset();
          this.auth.storeToken(res.accessToken);
          console.log(res.accessToken);
          localStorage.setItem('tok',res.accessToken)
        localStorage.setItem('name',name);
        
           // Route to the appropriate dashboard based on the username and password
          //alert("Welocome Service Booking");
          this.toast.success({detail:"Success",summary:"Login Successful", duration:5000});
           if (name === 'Admin' && password === 'Admin@123') {
          
            this.router.navigate(['/admindashboard']);
         } else {
          
         this.router.navigate(['/dashboard']);
         }

          //alert("Welocome Service Booking");
         // this.toast.success({detail:"SUCCESS",summary:res.message, duration:5000});
          //this.router.navigate(['/dashboard']) 
        },
        error:(err)=>{
        this.toast.error({detail:"Warning",summary:"Username/Password Incorrct",duration:5000})
        // console.log(err.Message)
        // alert(err?.error?.Message)
        }
      })
    }else{
      //console.log("Form is invalid");
      ValidateForm.validateAllFormFields(this.loginForm);
      this.toast.error({detail:"Warning",summary: "Your form is invalid",duration:5000});
    }
}

}
