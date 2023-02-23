import { Component } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent {
  clickMethod(product: Product) {
    if(confirm("Are you sure to delete "+product.name +"of product id "+product.id)){
      this.productservice.Deleteproduct(product.id).subscribe()
      {
        this.message="Product deleted successfully";
        // this.productlst=this.productlst.filter(item=>item.id !=product.id);
        // console.log(this.productlst.length);
      }
  
    }
  
  
  throw new Error('Method not implemented.');
  }
  
    productlst:Product={
      id: 0,
      name: '',
      make: '',
      model: '',
      cost: null,
      createdDate: new Date()
    };
    ulist:any;
    message:string="";
    constructor(private productservice:ProductService)
    {
  
    }
    ngOnInit(): void {
      
      
      this.productservice.getproducts().subscribe(
        data=>{
          this.ulist=data;
          console.log(this.productlst);
        });
       
      }
    }
    /*clickMethod(prod:Product){
      if(confirm("Are you sure to delete "+product.name)){
        this.productservice.Deletesupplier(product.id).subscribe()
        {
          this.message="Product deleted successfully";
          this.productlst=this.productlst.filter(item=>item.sid !=product.id);
          console.log(this.productlst.length);
        }
  
      }
    }*/

