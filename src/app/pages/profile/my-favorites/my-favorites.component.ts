import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent implements OnInit {

  public claseFav = "fa fa-heart fa_custom";
  public favoritos: Products[];
  public favorito: Products = new Products("", "", 0, "", 0, "", "", "")
  
  
  constructor(public productsService: ProductsService, public userService: UsersService, public router: Router) { }

  marcarFavorito() {

    if (this.claseFav === "fa fa-heart fa_custom"){
        this.claseFav = "fa fa-heart-o fa_custom";
    } else {
      this.claseFav = "fa fa-heart fa_custom";
    }
 
  }

  // detalleAnuncio(index :number) {
  //   //this.productsService.product = product;
    
  //   this.productsService.product = this.productsService.products[index];
  //   this.router.navigate(["/anuncio",index])
  // }
  ngOnInit(): void {
    let user = this.userService.userAllPages();

    this.productsService.getFavProducts(this.userService.user.user_id).subscribe((data: any) => {
      this.favorito = data[0];
      this.favoritos = data;

    })

  }

  }


