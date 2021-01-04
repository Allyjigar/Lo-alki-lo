import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';
import { Users } from 'src/app/models/users';
import { Favorito } from 'src/app/models/favorito';
import { FavouritesService } from 'src/app/shared/favourites.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  
  public favorito: Favorito;
  public favoritos: Favorito[];
  public claseFav;
  public product: Products;
  public fotos : string [] = [];
  constructor(private _route: ActivatedRoute, public productsService: ProductsService, public usersService: UsersService, public favouritesService: FavouritesService) {

  }


  marcarFavorito() {

    if (this.claseFav === "fa fa-heart-o fa_custom" && this.favouritesService.favorito.user_id != this.usersService.user.user_id) {
      this.claseFav = "fa fa-heart fa_custom";
      this.favouritesService.postFavProducts(new Favorito(this.usersService.user.user_id, this.productsService.product.product_id, true)).subscribe((data: Favorito) => {
        this.favorito = data[0];
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El producto se ha añadido a tu lista de favoritos',
          showConfirmButton: false,
          timer: 1500
        })
      });

    } else {
      this.claseFav = "fa fa-heart-o fa_custom";
      this.favouritesService.deleteFav(this.favouritesService.favorito.favourites_id).subscribe((data: any) => {
        
      });
      {

      }

    }


  }
  
  ngOnInit(): void {
    let index = this._route.snapshot.paramMap.get('id');

    let user = this.usersService.userAllPages();

    if(this.productsService.product) {
      this.fotos.push(this.productsService.product.foto1);
      if (this.productsService.product.foto2 != null) {
        this.fotos.push(this.productsService.product.foto2);
        if (this.productsService.product.foto3 != null) {
          this.fotos.push(this.productsService.product.foto3);
          if (this.productsService.product.foto4 != null) {
            this.fotos.push(this.productsService.product.foto4);
          }
        }
      }
    }
    console.log(this.fotos);

    this.productsService.product = this.productsService.products[index];
    this.usersService.getUser(this.productsService.product.user_id).subscribe((data: Users) => {
      this.usersService.user2 = data[0] ;
    })

    this.favouritesService.getFavProduct(this.usersService.user.user_id, this.productsService.product.product_id).subscribe((data: any) => {
      this.favouritesService.favorito = data;
      
    })
    
  }
}
