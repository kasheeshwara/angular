import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../auth.service';
import { User } from '../Models/User';
import ValidateForm from '../Models/validateForm';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  signUpForm!:FormGroup;
  
  u:User={id:0,name:"",password:"",email:"",mobile:null,registeredDate:new Date(),token:"",role:""};

  constructor(private fb:FormBuilder,
    private auth:AuthService,
   private toast:NgToastService,
    private router:Router){}

ngOnInit(): void {
  this.signUpForm=this.fb.group({
  username:['',Validators.required],
  password:['',Validators.required],
  email:['',Validators.required],
  mobile:['',Validators.required]
  })
}
hideShowPass(){
  this.isText = !this.isText;
  this.isText? this.eyeIcon = "fa-eye":this.eyeIcon="fa-eye-slash";
  this.isText?this.type="text":this.type="password";
}

onSignUp()
  {
    if(this.signUpForm.valid){
      //console.log(this.signUpForm.value);
      //send obj to database
    const name = this.signUpForm.get('username')?.value;
    const mobile = this.signUpForm.get('mobile')?.value;
    const password = this.signUpForm.get('password')?.value;
    const email = this.signUpForm.get('email')?.value;
    
    // send obj to database
    const user = {
      name: name,
      mobile: mobile,
      password: password,
      email: email
    };
    
      this.auth.signUp(user)
      .subscribe({
        next:(res=>{
          console.log(res.message);
          // alert("Registered Successfully");
         this.toast.success({detail:"User Registered Successfully",summary:res.message, duration:5000});
          this.router.navigate(['/login']);
          console.log("User Registered Successfully");
          //alert(res.message)
        }),
        error:(err=>{
          console.log("An error occurred while signing up:", err);
          // alert(err?.error?.message)
          this.toast.error({detail:"Enter valid Details",summary:err?.error?.Message,duration:5000})
        })
      })
    }else{
      
      ValidateForm.validateAllFormFields(this.signUpForm);
      alert("Your form is invalid");
    }

  }
}
