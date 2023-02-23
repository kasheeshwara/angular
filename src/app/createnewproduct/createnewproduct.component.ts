import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-createnewproduct',
  templateUrl: './createnewproduct.component.html',
  styleUrls: ['./createnewproduct.component.css']
})
export class CreatenewproductComponent implements OnInit{
  u:Product={id:0,name:"",make:"",model:"",cost:null,createdDate:new Date()};
  x:any;
  
message:string="";
constructor(private productservice:ProductService) { }
ngOnInit(): void {
}

saveuser():void
{
  
 this.productservice.addproduct(this.u).subscribe(
   {
    next:(Product)=>
    console.log(Product),
    
    
  }
 ) 
 alert("Product Added Successfully");
  console.log(this.u);
  
}
}
