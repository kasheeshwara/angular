import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Product } from '../Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit{
  ulist: Product={id:0,name:"",make:"",model:"",cost:null, createdDate:new Date()};
  id:any;
  ul:any;
  jwtHelper: any;
  
  constructor(private productservice:ProductService,private authService: AuthService) { }

  // isAdmin(): boolean {
  //   return this.authService.isAdmin();
  // }
isAuthenticated(){
  this.authService.isAuthenticated();
}

  ngOnInit(): void {
   
    
    this.productservice.getproducts().subscribe(
      data=>{
        this.ul=data;
        console.log(this.ulist);
      });

      
}
// clickMethod(ulist: Product) {
//   if(confirm("Are you sure to delete "+ulist.name +" of product id "+ulist.id)){
//     this.productservice.Deleteproduct(ulist.id).subscribe()
//     {
     
//       this.productservice.getproducts().subscribe(products => {
//         this.ulist = products;
        
//       });
//       alert("Product deleted successfully");

//       this.ulist=this.ulist.filter(item=>item.id !=ulist.id);
//       // console.log(this.productlst.length);
//     }

//   }
clickMethod(ulist: Product) {
  
  if (confirm("Are you sure to delete " + ulist.name + " of product id " + ulist.id)) {
    
    this.productservice.Deleteproduct(ulist.id).subscribe(() => {
      alert("Product deleted successfully");
      this.productservice.getproducts().subscribe(products => {
        this.ul = products;
      });
    });
  }


  try {
    
   const httpResponse = getHttpResponseSync('https://localhost:44347/api/Products');
    }
  catch(error) {
    alert("Product is in use cant delete it");
   }
  
  
}


}

function getHttpResponseSync(arg0: string) {
  throw new Error('Function not implemented.');
}

