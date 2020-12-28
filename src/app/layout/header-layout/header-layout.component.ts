import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.css']
})
export class HeaderLayoutComponent implements OnInit {

  constructor(public userService: UsersService, public productsService: ProductsService, public router: Router) { 

  }
 
  buscarProducto(producto: HTMLInputElement) {

    this.router.navigateByUrl("/buscador");
    this.productsService.getSearchProduct(producto.value).subscribe((data: Products[]) => {
      this.productsService.product = data [0];
      this.productsService.products = data;
    })
    


  }
  ngOnInit(): void {
  }

}
