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
  public misProductosAlquilados: Products[];
  public misPeticiones: any;
  public product: Products;
  public productoValorado: Products;
  public misPeticionesNO : boolean = false;
  public misProductosNO : boolean = false;
  public misAlquileresNO : boolean = false;
  public productoEditado: Products = new Products("", "", 0, "", 0, "", "", "");

  constructor(public productsService: ProductsService, public userService: UsersService, public valoracionService: ValoracionService, public router: Router) { }
  mostrarMisProductos() {
    this.productsService.getUserProducts(this.userService.user.user_id).subscribe((data: any) => {
      this.misProductos = data;
      this.productsService.misProductosAlquilados = null;
      this.misPeticiones = null;

      this.misAlquileresNO = false;
      this.misPeticionesNO = false;
      if (this.misProductos.length < 1) {
        this.misProductosNO = true;
      }
    })
  }

  mostrarMisProductosAlquilados() {
    this.productsService.getRenting(this.userService.user.user_id).subscribe((data: any[]) => {
      this.productsService.misProductosAlquilados = data;
      this.misProductos = null;
      this.misPeticiones = null;

      this.misPeticionesNO = false;
      this.misProductosNO = false;
      if (this.productsService.misProductosAlquilados.length < 1) {
        this.misAlquileresNO = true;
      }
    })
    console.log(this.productsService.misProductosAlquilados);
  }

  mostrarMisPeticiones() {
    this.productsService.getProductsRent(this.userService.user.user_id).subscribe((data: any []) => {
      this.misPeticiones = data;
      
      this.misProductos = null;
      this.productsService.misProductosAlquilados = null;

      this.misAlquileresNO = false;
      this.misProductosNO = false;
      if (this.misPeticiones.length <1  ) {
        this.misPeticionesNO = true;
      }  console.log(this.misPeticiones);
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

  modificarAnuncio(product_id, name, descripcion, foto1, precio, foto2, foto3, foto4) {
    let ruta = foto1;
    let ruta2 = foto2;
    let ruta3 = foto3;
    let ruta4 = foto4;
    let foto: string;  
    let foto2da: string;  
    let foto3era: string;  
    let foto4ta: string;  
      if ( ruta == null) {
        foto = "/assets/sin_foto.jpg";
      } else {
        foto = ruta.replace("C:\\fakepath\\", "/assets/" );
      }
      if (ruta2 != null){
        foto2da = ruta2.replace("C:\\fakepath\\", "/assets/" );
      } else {
        foto2da = "/assets/sin_foto.jpg";
      }
      if (ruta3 != null) {
        foto3era = ruta3.replace("C:\\fakepath\\", "/assets/" );
      } else {
        foto3era = "/assets/sin_foto.jpg";
      }
      if (ruta4 != null) {
        foto4ta = ruta4.replace("C:\\fakepath\\", "/assets/" );
      } else {
        foto4ta = "/assets/sin_foto.jpg";
      }
      
    this.productsService.putEditProduct(product_id, name, descripcion, precio, foto, foto2da, foto3era, foto4ta).subscribe((data: any) => {
      console.log(data);
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto se ha modificado con éxito',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }

  productoEdit(id: number) {
    this.productsService.getProduct(id).subscribe((data: Products[]) => {
      this.productoEditado = data[0];
      console.log(data[0]);
    })

  }

  eliminarAnuncio(product_id: number) {
    this.productsService.deleteProduct(product_id).subscribe((data: any) => {
      console.log(product_id);
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


