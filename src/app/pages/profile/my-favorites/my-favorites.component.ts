import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorito } from 'src/app/models/favorito';
import { Products } from 'src/app/models/products';
import { FavouritesService } from 'src/app/shared/favourites.service';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';
import * as moment from 'moment';
import swal from 'sweetalert2';


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
  public favoritoSelect : boolean;
  public misFavoritosNO : boolean = false;

  constructor(public productsService: ProductsService, public userService: UsersService, public favouritesService: FavouritesService, public router: Router) { }



  detalleAnuncio(product_id: number) {
    //this.productsService.product = product;
    console.log(product_id);
    this.productsService.getProduct(product_id).subscribe((data : Products []) => {
      this.productsService.product = data[0];
    })
    console.log(this.productsService.product);
    this.router.navigate(["/anuncio", product_id]);
    
  }
  eliminarFav(product_id : number){
    this.favouritesService.deleteFav(this.userService.user.user_id, product_id).subscribe((data) => {
      this.favoritoSelect = false;
      console.log(data);
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡El producto se ha eliminado de tus favoritos!',
        showConfirmButton: false,
        timer: 2000
      })
    })
    
  }
  
  ngOnInit(): void {
    let user = this.userService.userAllPages();

    this.favouritesService.getFavProducts(this.userService.user.user_id).subscribe((data: any) => {
      this.favorito = data[0];
      this.favoritos = data;
      if (this.favorito == null) {
        this.misFavoritosNO = true;
      } else {
        this.misFavoritosNO = false;
      }

    })


  }
}

