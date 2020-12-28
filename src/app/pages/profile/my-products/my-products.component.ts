import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Renting } from 'src/app/models/renting';
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
  public isHidden4: boolean = false;
  public isHidden5: boolean = true;
  public product: Products;
  public products: Products [];
  public productoValorado : Products; 
  public user: Users = new Users("", "", "", "");
  public numero : number;

  constructor(public productService: ProductsService, public userService: UsersService) {

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
    this.getAlquilados();
    console.log(this.products);
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
  selectProduct(produSelected : Products) {
        this.productService.product = produSelected;
        this.productService.product.media = this.numero;
        console.log(produSelected);
  }
  getAlquilados() {
    this.productService.getRenting(this.userService.user.user_id).subscribe((data : []) => {
      this.productService.peticionAlquilados = data;
      })
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


