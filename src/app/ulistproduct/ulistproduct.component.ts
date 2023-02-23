import { Component } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-ulistproduct',
  templateUrl: './ulistproduct.component.html',
  styleUrls: ['./ulistproduct.component.css']
})
export class UlistproductComponent {
  ulist: Product[] = [];
  
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
   
    
    this.productservice.getproducts().subscribe(
      data=>{
        this.ulist=data;
        console.log(this.ulist);
      });
}
}
