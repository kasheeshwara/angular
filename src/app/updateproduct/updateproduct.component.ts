import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
  user: Product={id:0,name:"",make:"",model:"",cost:null,createdDate: new Date()};
  id:any;
  message: string="";
constructor(private productservice:ProductService,private route:Router,
  private router:ActivatedRoute){
    this.id=this.router.snapshot.paramMap.get('id');
    
  }
  ngOnInit(): void {
    this.productservice.getproduct(this.id).subscribe(
      data=>{
        this.user=data;
        console.log(this.user);
      }
    )
  }
  updateDetails(user:Product){
    let id=user.id;
    this.productservice.Editproduct(id,user).subscribe(
      data=>{
               this.message="User Details Updated Successfully";
      
      }
    )
  }
}
