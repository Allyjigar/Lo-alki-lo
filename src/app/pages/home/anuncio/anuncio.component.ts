import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  public claseFav = "fa fa-heart-o fa_custom";
  public product: Products;
  constructor(private _route: ActivatedRoute, public productsService: ProductsService, public usersService: UsersService) {

  }

  favorito() {

    if (this.claseFav === "fa fa-heart-o fa_custom") {
      this.claseFav = "fa fa-heart fa_custom";
    } else {
      this.claseFav = "fa fa-heart-o fa_custom";
    }
  }
  ngOnInit(): void {
    let index = this._route.snapshot.paramMap.get('id');

    let user = this.usersService.userAllPages();
  
    this.productsService.product = this.productsService.products[index];
    this.usersService.getUser(this.productsService.product.user_id).subscribe((data: Users) => {
      this.usersService.user2 = data[0] ;
    })
  }
}
