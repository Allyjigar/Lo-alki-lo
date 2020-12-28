import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Renting } from 'src/app/models/renting';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';
import { ValoracionService } from 'src/app/shared/valoracion.service';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.component.html',
  styleUrls: ['./valoraciones.component.css']
})
export class ValoracionesComponent implements OnInit {
  public numero : number;
  public puntuacion : number;
  public productoValorado : Products;
  public valorado : boolean = false;
  public rent : Renting = new Renting ();

  constructor(public productService: ProductsService, public userService : UsersService, public valoracionService : ValoracionService) { }
  
  prueba(num){
    this.numero = num
  }
  mostrar(){
    this.puntuacion = this.numero
    console.log(this.puntuacion);
    this.valorar();
  }
  valorar() {
    this.valorado = true;
    //this.productService.product.valorado = true;
    this.productService.product.nvaloraciones += 1;
    this.productService.product.suma = this.productService.product.suma + this.puntuacion;
    this.productService.product.media = this.productService.product.suma / this.productService.product.nvaloraciones;
     this.valoracionService.putValoracioes(this.productService.product).subscribe((data) => {
       console.log(data);
      console.log(this.productService.product);
      })
  }
  modificarRenting() {
    this.productService.peticionAlquilados[16] = this.rent.renting_id
  }
 /* 
  valorado() {
      this.productService.product.media = this.numero;
    
  } */
  ngOnInit(): void {
    let user = this.userService.userAllPages();
  }

}
