import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit{
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
