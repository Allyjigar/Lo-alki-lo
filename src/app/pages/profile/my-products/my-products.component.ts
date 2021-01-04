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
  public rent: Renting = new Renting(0, "", 0, 0, false, false, 0);
  public user: Users = new Users("", "", "", "")
  public products: Products[];
  public misProductos: Products[];
  public misProductosAlquilados: Products[];
  public misPeticiones: [];
  public peticiones: [];


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

  mostrarMisPeticiones() {
    this.productsService.getProductsRent(this.userService.user.user_id).subscribe((data: any) => {
      this.misPeticiones = data;
            this.misProductos = null;
      this.misProductosAlquilados = null;
    })
  }

  aceptarSolicitud(i) {
    this.productsService.putProductsRent(i,1,0).subscribe((data : any) => {
      console.log(data);
      this.mostrarMisPeticiones();
    })
  }
  rechazarSolicitud(i) {
    this.productsService.deleteProductsRent(i).subscribe((data : any) => {
      console.log(data);
      this.mostrarMisPeticiones();
    })

  }

  eliminarAnuncio() {
    let id = this.productsService.product.product_id;
    this.productsService.deleteProduct(Number(id)).subscribe((data: any) => {
      console.log(data);
      this.mostrarMisProductos();

    });

  }
  modificarAnuncio() {


  }
  ngOnInit(): void {
    let user = this.userService.userAllPages();

    this.mostrarMisProductos();


  }

}


