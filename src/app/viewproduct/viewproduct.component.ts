import { Component,OnInit} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  id: any;
  user: Product={id:0,name:"",make:"",model:"",cost:null,createdDate: new Date()};

constructor(private productservice:ProductService){}
  ngOnInit(): void {
    
  }
  getProductDetails(): void {
    this.productservice.getproduct(this.id).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
      },
      error => {
        console.log(error);
      }
    );
  }
}
