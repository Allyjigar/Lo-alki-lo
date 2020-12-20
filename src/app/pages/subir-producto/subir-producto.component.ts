import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-subir-producto',
  templateUrl: './subir-producto.component.html',
  styleUrls: ['./subir-producto.component.css']
})
export class SubirProductoComponent implements OnInit {

  public product: Products = new Products("", "", "", 0, "", "", "");
  public categoria: string;
  public subcategoria: string;


  constructor(public productService: ProductsService, public router: Router) {
    this.product
  }

  categoriaValue(cat: string){

    this.categoria === cat;

  }
  subcategoriaValue(sub: string){

    this.subcategoria === sub; 

  }

  subirProducto(name: HTMLInputElement, descripcion: HTMLInputElement, foto1: HTMLInputElement, precio: HTMLInputElement, foto2: HTMLInputElement, foto3: HTMLInputElement, foto4: HTMLInputElement) {

    this.productService.postProduct(new Products(name.value, descripcion.value, foto1.value, Number(precio.value), this.categoria, this.subcategoria, foto2.value, foto3.value, foto4.value)).subscribe((data: any) => {
      console.log(data);

      if (data.insertId != 0) {
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto añadido a tu catálogo',
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
  }

}
