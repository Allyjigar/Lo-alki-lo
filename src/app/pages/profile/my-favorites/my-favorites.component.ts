import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorito } from 'src/app/models/favorito';
import { Products } from 'src/app/models/products';
import { FavouritesService } from 'src/app/shared/favourites.service';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent implements OnInit {

  public product: Products;
  public claseFav = "fa fa-heart fa_custom";
  public favoritos: Favorito[];
  public favorito: Favorito;
  


  constructor(public productsService: ProductsService, public userService: UsersService, public favouritesService: FavouritesService, public router: Router) { }

  desmarcarFavorito() {

    if (this.claseFav === "fa fa-heart-o fa_custom") {
      this.claseFav = "fa fa-heart fa_custom";
      this.favouritesService.postFavProducts(new Favorito(this.userService.user.user_id, this.productsService.product.product_id, true)).subscribe((data: Favorito) => {
        this.favorito = data[0];
      });

    } else {
      this.claseFav = "fa fa-heart-o fa_custom";
      this.favouritesService.deleteFav(this.favouritesService.favorito.favourites_id).subscribe((data: Favorito) => {
        this.favorito = data[0];
      });
      {

      }

    }


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
  ngOnInit(): void {
    let user = this.userService.userAllPages();

    this.favouritesService.getFavProducts(this.userService.user.user_id).subscribe((data: any) => {
      this.favorito = data[0];
      this.favoritos = data;

    })

  }

}


