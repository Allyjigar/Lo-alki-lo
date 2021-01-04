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
  public productoValorado : Products;


  constructor(public productsService: ProductsService, public userService : UsersService, public valoracionService : ValoracionService) { }
  
  
  ngOnInit(): void {
    let user = this.userService.userAllPages();
  }

}
