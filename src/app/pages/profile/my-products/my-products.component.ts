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

  public isHidden: boolean = true;
  public isHidden2: boolean = true;
  public isHidden3: boolean = true;
  public product: Products = new Products("", "", 0, "", 0, "", "", "")
  public user: Users = new Users("", "", "", "")

  constructor(public productService: ProductsService, public userService: UsersService) {
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
  // eliminarAnuncio() {
  //   this.productService.deleteProduct(Number(this.productService.product.id)).subscribe(data) => {
  //     console.log(data);
  //   }
  // }
  ngOnInit(): void {
    let user = this.userService.userAllPages();
  }

}


