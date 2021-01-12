import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public categoria: string;
  public subcategoria: string;


  constructor(public productsService: ProductsService, public router: Router, public userService : UsersService) {

    console.log(this.productsService.product)

  }

  categoriaValue(cat: string) {

    this.categoria = cat;
    this.router.navigateByUrl("/buscador");
    this.productsService.getSearchProduct(this.categoria).subscribe((data: Products[]) => {
      this.productsService.product = data[0];
      this.productsService.products = data;
    })
  }



  ngOnInit(): void {
    console.log("Anuncio")
    this.productsService.getProducts().subscribe((data: Products[]) => {
      this.productsService.product = data[0];
      this.productsService.products = data;
    })
    this.userService.sidebarNumber = 10;
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
