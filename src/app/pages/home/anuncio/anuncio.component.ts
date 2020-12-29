import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';
import { Users } from 'src/app/models/users';
import { Favorito } from 'src/app/models/favorito';
import { FavouritesService } from 'src/app/shared/favourites.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  
  public favorito: Favorito;
  public favoritos: Favorito[];
  public claseFav = "fa fa-heart-o fa_custom";
  public product: Products;
  constructor(private _route: ActivatedRoute, public productsService: ProductsService, public usersService: UsersService, public favouritesService: FavouritesService) {

  }


  marcarFavorito() {

    if (this.claseFav === "fa fa-heart-o fa_custom" ) {
      this.claseFav = "fa fa-heart fa_custom";
      this.favouritesService.postFavProducts(new Favorito(this.usersService.user.user_id, this.productsService.product.product_id, true)).subscribe((data: Favorito) => {
        this.favorito = data[0];
      });

    } else {
      this.claseFav = "fa fa-heart-o fa_custom";
      alert(this.favouritesService.favorito.favourites_id);
      this.favouritesService.deleteFav(this.favouritesService.favorito.favourites_id).subscribe((data: any) => {
        
      });
      {

      }

    }


  }
  ngOnInit(): void {
    let index = this._route.snapshot.paramMap.get('id');

    let user = this.usersService.userAllPages();

    this.productsService.product = this.productsService.products[index];
    this.usersService.getUser(this.productsService.product.user_id).subscribe((data: Users) => {
      this.usersService.user2 = data[0] ;
    })

    this.favouritesService.getFavProduct(this.usersService.user.user_id, this.productsService.product.product_id).subscribe((data: any) => {
      this.favouritesService.favorito = data;
      console.log(this.favouritesService.favorito);
    })

  }
}
