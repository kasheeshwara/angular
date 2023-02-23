import { Component,OnInit} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  id: any;
  user: Product={id:0,name:"",make:"",model:"",cost:null,createdDate: new Date()};

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
  // getProductDetails(): void {
  //   this.productservice.getproduct(this.id).subscribe(
  //     data => {
  //       this.user = data;
  //       console.log(this.user);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
}
