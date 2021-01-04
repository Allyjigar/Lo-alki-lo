import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { Renting } from '../models/renting';
import { ProductsService } from './products.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

  private url = "http://localhost:9191/products/valoraciones";
  public numero : number;
  public puntuacion : number;
  public rent : Renting = new Renting ();
  
  constructor(public productsService: ProductsService, private http: HttpClient, public userService : UsersService) { }
  
  putValoracioes(valoratedProduct : Products) {
    return this.http.put(this.url, valoratedProduct);
  }
  prueba(num){
    this.numero = num
  }
  mostrar(produSelected : Products, renting_id : number){
    this.productsService.product = produSelected;
    this.rent.renting_id = renting_id;
    console.log(produSelected);
      this.valorar();
      this.modificarRenting()

  }
  valorar() {
    this.puntuacion = this.numero
    console.log(this.puntuacion);
    this.productsService.product.nvaloraciones += 1;
    this.productsService.product.suma = this.productsService.product.suma + this.puntuacion;
    this.productsService.product.media = this.productsService.product.suma / this.productsService.product.nvaloraciones;
    this.putValoracioes(this.productsService.product).subscribe((data) => {
      console.log(data);
      console.log(this.productsService.product);
      });
  }
  
  modificarRenting() {
    this.rent.valorado = 1;
    this.rent.alquilado = 1;
    this.rent.arrendatario_id = this.userService.user.user_id;
    this.rent.product_id = this.productsService.product.product_id;
    console.log(this.rent);
    this.productsService.putProductAd(this.rent).subscribe((data) => { console.log(data)});
    alert("Has valorado con éxito el producto: " + this.productsService.product.name + "." + "\n" + "Tu valoración ha sido de: " + this.puntuacion + " sobre 5 ;)");
  }
}
