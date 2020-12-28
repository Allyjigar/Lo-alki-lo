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
  public id: number;
  public rent: Renting = new Renting();
  public user: Users = new Users("", "", "", "")
  public products: Products[];
  public misProductos: Products[];
  public misProductosAlquilados: Products[];
  public misPeticiones: [];

  public isHidden: boolean = true;
  public isHidden2: boolean = true;
  public isHidden3: boolean = true;
  public isHidden4: boolean = false;
  public isHidden5: boolean = true;
  public product: Products;
  public productoValorado : Products; 
  public numero : number;

  constructor(public productsService: ProductsService, public userService: UsersService) {

  }

  mostrarMisProductos() {
    this.productsService.getUserProducts(this.userService.user.user_id).subscribe((data: any) => {
      this.misProductos = data;
      this.misProductosAlquilados = null; 
      this.misPeticiones = null; 
    })
  }

  mostrarMisProductosAlquilados() {
   this.productsService.getProductsAd(this.userService.user.user_id).subscribe((data: any) => {
     this.misProductosAlquilados = data;
     this.misProductos = null; 
     this.misPeticiones = null;
   })
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

  mostrarMisPeticiones() {
    this.productsService.getProductsRent(this.productsService.product.user_id).subscribe((data: any) => {
      this.misPeticiones = data;
      this.misProductos = null;
      this.misProductosAlquilados = null;
    })
  }

  aceptarSolicitud() {

  }
  rechazarSolicitud() {

  }
  
  eliminarAnuncio() {
    let id = this.productsService.product.product_id;
    this.productsService.deleteProduct(Number(id)).subscribe((data: any) => {
      console.log(data);  
      });
  }
  selectProduct(produSelected : Products) {
        this.productsService.product = produSelected;
        this.productsService.product.media = this.numero;
        console.log(produSelected);
  }
  getAlquilados() {
    this.productsService.getRenting(this.userService.user.user_id).subscribe((data : []) => {
      this.productsService.peticionAlquilados = data;
      })
  }
  // eliminarAnuncio() {
  //   this.productService.deleteProduct(Number(this.productService.product.id)).subscribe(data) => {
  //     console.log(data);
  //   }
  // }
  ngOnInit(): void {
    let user = this.userService.userAllPages();
    this.mostrarMisProductos();
  }

}


