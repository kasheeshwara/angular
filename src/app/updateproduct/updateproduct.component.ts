import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../product.service';
import { UpdatebookingService } from '../updatebooking.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
  product: Product={id:0,name:"",make:"",model:"",cost:null,createdDate: new Date()};
  id:any;
  message: string="";
constructor(private productservice:ProductService,private route:Router,
  private router:ActivatedRoute,private updateproduct:UpdatebookingService){
    this.id=this.router.snapshot.paramMap.get('id');
    
  }
  ngOnInit(): void {
    this.productservice.getproduct(this.id).subscribe(
      data=>{
        this.product=data;
        console.log(this.product);
      }
    )
    // this.bookingservice.getbooking(this.id).subscribe(booking => {
    //   this.product = booking;
      
    // });
  }
  updateDetails(product:Product){
    let id=product.id;
    this.updateproduct.updateProduct(this.product).subscribe(
      data=>{
               alert("Product Details Updated Successfully");
               console.log(this.product);
      }
    )
  }
//   updateDetails(product:Bookings){
//     let id=product.id;
  
//    this.updatebooking.updateBooking(this.product).subscribe(
//      data=>{
//               alert("Booking status Updated Successfully");
//               console.log(product);
//      }
//    )
//  }
}
