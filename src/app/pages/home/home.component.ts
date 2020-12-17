import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public product: Products
  public products : Products[]
  constructor(public productsService: ProductsService) {
    this.product
    console.log(this.productsService.product)
    
  }



  ngOnInit(): void {
    console.log("Anuncio")
    this.productsService.getProducts().subscribe((data: Products[]) => {
      this.product = data[0];
      this.products = data;
    })
  }

}
