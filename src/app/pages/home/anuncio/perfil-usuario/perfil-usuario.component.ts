import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  public productosVendedor  : Products[];
 
  constructor(public productsService: ProductsService,public userService : UsersService,public router : Router) { }

  ngOnInit(): void {
    let user = this.userService.userAllPages();
    let id  = this.userService.user2.user_id;
    alert (id)
    console.log(id)
    this.productsService.getUserProducts(id).subscribe((data: Products[]) => {
      this.productosVendedor = data;
    })
    for (let i = 0; i < this.productosVendedor.length;i++)
    {
      alert (this.productosVendedor[i].name)
    }
  }

}
