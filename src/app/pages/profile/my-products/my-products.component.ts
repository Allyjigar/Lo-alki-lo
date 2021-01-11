import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Renting } from 'src/app/models/renting';
import { Users } from 'src/app/models/users';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';
import { ValoracionService } from 'src/app/shared/valoracion.service';
//import { Script } from 'vm';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  public id: number;
  //public rent: Renting = new Renting(0, "", 0, 0, false, false, 0);
  public user: Users = new Users("", "", "", "")
  public products: Products[];
  public misProductos: Products[];
  public misProductosAlquilados :  Products [];
  public misPeticiones: [];
  public product: Products;
  public productoValorado: Products;

  constructor(public productsService: ProductsService, public userService: UsersService, public valoracionService: ValoracionService, public router: Router) { }
  mostrarMisProductos() {
    this.productsService.getUserProducts(this.userService.user.user_id).subscribe((data: any) => {
      this.misProductos = data;
      this.productsService.misProductosAlquilados = null;
      this.misPeticiones = null;
    })
  }

  mostrarMisProductosAlquilados() {
    this.productsService.getRenting(this.userService.user.user_id).subscribe((data: any) => {
      this.productsService.misProductosAlquilados = data;
      this.misProductos = null;
      this.misPeticiones = null;
    })
    console.log(this.productsService.misProductosAlquilados);
  }

  mostrarMisPeticiones() {
    this.productsService.getProductsRent(this.userService.user.user_id).subscribe((data: any) => {
      this.misPeticiones = data;
      this.misProductos = null;
      this.productsService.misProductosAlquilados = null;
    })
  }

  aceptarSolicitud(i) {
    this.productsService.putProductsRent(i, 1, 0).subscribe((data: any) => {
      console.log(data);
      this.mostrarMisPeticiones();
    })
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'La petición ha sido aceptada',
      showConfirmButton: false,
      timer: 2000
    })
  }
  rechazarSolicitud(i) {
    this.productsService.deleteProductsRent(i).subscribe((data: any) => {
      console.log(data);
      this.mostrarMisPeticiones();
    })
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'La petición ha sido rechazada',
      showConfirmButton: false,
      timer: 2000
    })

  }

  eliminarAnuncio() {
    this.productsService.deleteProduct(Number(this.productsService.product.product_id)).subscribe((data) => {
      //console.log(this.productsService.product.product_id);
      console.log(data);
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto se ha eliminado',
        showConfirmButton: false,
        timer: 2000
      })
    });
  }

  detalleAnuncio(index: number) {
    //this.productsService.product = product;
    let pos;
    for (let i = 0; i < this.productsService.misProductosAlquilados.length; i++) {
      if (this.productsService.misProductosAlquilados[i].product_id == index) {
        this.productsService.product = this.productsService.misProductosAlquilados[i];
        pos = i;

      }
    }
    this.router.navigate(["/anuncio", pos])

  }

 

  ngOnInit(): void {
    let user = this.userService.userAllPages();
    this.mostrarMisProductos();


  }

}


