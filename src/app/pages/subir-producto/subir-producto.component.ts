import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { Users } from 'src/app/models/users';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-subir-producto',
  templateUrl: './subir-producto.component.html',
  styleUrls: ['./subir-producto.component.css']
})
export class SubirProductoComponent implements OnInit {

  public product: Products = new Products("", "", 0, "", 0, "", "", "");
  public categoria: string;
  public subcategoria: string;
  public user: Users = new Users("", "", "", "");


  constructor(public productService: ProductsService, public router: Router, public userService: UsersService) {
    this.product
  }

  categoriaValue(cat: string) {

    this.categoria = cat;
    console.log(this.categoria)


  }
  subcategoriaValue(sub: string) {

    this.subcategoria = sub;
    console.log(this.subcategoria)


  }

  subirProducto(name: HTMLInputElement, descripcion: HTMLInputElement, foto1: HTMLInputElement, precio: HTMLInputElement, foto2: HTMLInputElement, foto3: HTMLInputElement, foto4: HTMLInputElement) {
    let ruta = foto1.value;
    let ruta2 = foto2.value;
    let ruta3 = foto3.value;
    let ruta4 = foto4.value;
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
      }
      if (ruta3 != null) {
        foto3era = ruta3.replace("C:\\fakepath\\", "/assets/" );
      }
      if (ruta4 != null) {
        foto4ta = ruta4.replace("C:\\fakepath\\", "/assets/" );
      }
    let newProduct = new Products(name.value, descripcion.value, this.userService.user.user_id, foto, Number(precio.value), this.categoria, this.subcategoria, foto2da, foto3era, foto4ta, 0 , 0 , 0)
    this.productService.postProduct(newProduct).subscribe((data: any) => {
      console.log(data);

      if (data.insertId != 0) {
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El producto se ha añadido a tu catálogo',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('/my-products');
      } else {
        swal.fire({
          icon: 'error',
          title: 'Uuups...',
          text: 'Algo ha fallado',
        })

      }

    })


  }

  ngOnInit(): void {
    let user = this.userService.userAllPages();
  }

}
