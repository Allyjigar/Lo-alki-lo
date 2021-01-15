import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';
import { Products } from 'src/app/models/products';
import { ChatService } from 'src/app/shared/chat.service';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  public productosVendedor: Products[];

  constructor(public productsService: ProductsService, public userService: UsersService, public router: Router, public apiChatService: ChatService) { }

  nuevoChat() {
    if (this.userService.user == null) {
      swal.fire({
        position: 'top-end',
        icon: 'error',
        title: '¡Debes estar logueado para poder contactar!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('/login');
    } else {

      if (this.userService.user.user_id != this.userService.user2.user_id) {
        this.apiChatService.postChat(new Chat(this.userService.user.user_id, this.userService.user2.user_id, this.userService.user.nickname, this.userService.user.foto, this.userService.user2.nickname, this.userService.user2.foto)).subscribe((data) => {
          console.log(data);
        })
        this.router.navigateByUrl('/chat');
      } else {
        swal.fire({
          position: 'top-end',
          icon: 'error',
          title: '¡No se pueden contactar con uno mismo!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  }
  detalleAnuncio(index: number) {
    //this.productsService.product = product;

    let pos;
    for (let i = 0; i < this.productosVendedor.length; i++) {
      if (this.productosVendedor[i].product_id == index) {
        this.productsService.product = this.productosVendedor[i];
        pos = i;

      }
    }
    this.router.navigate(["/anuncio", pos])

  }


  ngOnInit(): void {
    let user = this.userService.userAllPages();
    let id = this.userService.user2.user_id;
    console.log(this.userService.user2);
    this.productsService.getUserProducts(id).subscribe((data: Products[]) => {
      this.productosVendedor = data;
    })

  }

}
