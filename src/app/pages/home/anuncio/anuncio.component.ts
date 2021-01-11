import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';
import { Users } from 'src/app/models/users';
import { Favorito } from 'src/app/models/favorito';
import { FavouritesService } from 'src/app/shared/favourites.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  public favorito: Favorito;
  public favoritos: Favorito[];
  public fechaInicio: Date;
  public fechaFin: Date;
  public claseFav = "fa fa-heart-o fa_custom";
  public product: Products;
  public fotos: string[] = [];
  public favoritoSelect: boolean;
  constructor(private http: HttpClient, private _route: ActivatedRoute, public productsService: ProductsService, public usersService: UsersService, public favouritesService: FavouritesService, public router: Router) {

  }

  //Nueva solicitud
  entradaSolicitud(fechaInicio, fechaFin) {

    //Tratamiento de fechas  


    let fecha1 = moment(fechaInicio).format("YYYY-MM-DD")
    let fecha11 = moment(fechaInicio);

    let fecha22 = moment(fechaFin);

    let duracion = fecha22.diff(fecha11, 'days')
    console.log("FechaInicio : " + fechaInicio)

    console.log(duracion)

    //duracion/fecha/idproduct/iduser/alquilado/valorado

    if (this.usersService.user != null) {
      if (this.usersService.user.user_id != this.usersService.user2.user_id) {
        //Llamada a la api
        this.productsService.entradaSolicitud(fecha1, duracion, this.usersService.user.user_id).subscribe((data: any) => {
          console.log(data)
          swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '¡Petición enviada!',
            showConfirmButton: false,
            timer: 1500
          })
        }
        )
      }
      else {
        swal.fire({
          position: 'top-end',
          icon: 'error',
          title: '¡No se pueden alquilar productos propios!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
    else {
      swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Debes loguearte para mandar una solicitud',
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigateByUrl('/login');
    }


  }



  marcarFavorito() {
    if (this.favoritoSelect == false) {
      this.favouritesService.postFavProducts(new Favorito(this.usersService.user.user_id, this.productsService.product.product_id)).subscribe((data) => {
        this.favoritoSelect = true;
        console.log(data);
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '¡El producto se ha añadido a tus favoritos!',
          showConfirmButton: false,
          timer: 1500
        })
      })

    } else {
      this.favouritesService.deleteFav(this.usersService.user.user_id, this.productsService.product.product_id).subscribe((data) => {
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
  }

  loguearte() {
    swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Debes loguearte para agregar un producto a tus favoritos',
      showConfirmButton: false,
      timer: 2000
    })
    this.router.navigateByUrl('/login');
  }
  ngOnInit(): void {
    let index = this._route.snapshot.paramMap.get('id');


    let user = this.usersService.userAllPages();

    if (this.productsService.product) {
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
      this.usersService.user2 = data[0];
    })

    this.favouritesService.getFavProduct(this.usersService.user.user_id, this.productsService.product.product_id).subscribe((data: any) => {
      console.log(data);
      if (data.length != 0) {
        this.favoritoSelect = true;
      } else {
        this.favoritoSelect = false;
      }
    })

  }



}
