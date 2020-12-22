import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Users } from 'src/app/models/users';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  public id: number;
  public isHidden: boolean = true;
  public isHidden2: boolean = true;
  public isHidden3: boolean = true;
  public product: Products = new Products("", "", 0, "", 0, "", "", "")
  public user: Users = new Users("", "", "", "")
  public products: Products[];
  constructor(public productsService: ProductsService, public userService: UsersService) {
    this.product
  }

  mostrarMisProductos() {
    if (this.isHidden == true) {
      this.isHidden = false;
      this.isHidden2 = true;
      this.isHidden3 = true;
    } else {
      this.isHidden = true;
      this.isHidden2 = true;
      this.isHidden3 = true;
    }
  }
  mostrarOtrosProductos() {
    if (this.isHidden2 == true) {
      this.isHidden = true;
      this.isHidden2 = false;
      this.isHidden3 = true;
    } else {
      this.isHidden = true;
      this.isHidden2 = true;
      this.isHidden3 = true;
    }
  }
  mostrarPeticiones() {
    if (this.isHidden3 == true) {
      this.isHidden = true;
      this.isHidden2 = true;
      this.isHidden3 = false;
    } else {
      this.isHidden = true;
      this.isHidden2 = true;
      this.isHidden3 = true;
    }
  }
  eliminarAnuncio() {
    this.productsService.deleteProduct(Number(this.productsService.product.product_id)).subscribe((data: any) => {
      console.log(data);
      console.log(this.productsService.product.product_id);
    })
  }
  ngOnInit(): void {
    let user = this.userService.userAllPages();
   this.productsService.getUserProducts(this.productsService.product.user_id).subscribe((data: Products[]) => {
      // this.product = data[0];
      this.products = data;
    })
    
  
   
    
  }

}


