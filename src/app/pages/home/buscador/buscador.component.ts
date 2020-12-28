import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(public userService : UsersService, public productsService: ProductsService, public router: Router) {
    console.log(this.productsService.product)
   }

  
  ngOnInit(): void {
    // let user = this.userService.userAllPages();
    
    
  }
  detalleAnuncio(index: number) {
    //this.productsService.product = product;

    let pos;
    for (let i = 0; i < this.productsService.products.length; i++) {
      if (this.productsService.products[i].product_id == index) {
        this.productsService.product = this.productsService.products[i];
        pos = i;

      }
    }
    this.router.navigate(["/anuncio", pos])

  }

  

}
