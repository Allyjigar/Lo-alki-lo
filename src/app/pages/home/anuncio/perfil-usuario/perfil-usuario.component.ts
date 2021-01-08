import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';
import { Products } from 'src/app/models/products';
import { ChatService } from 'src/app/shared/chat.service';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  public productosVendedor  : Products[];
 
  constructor(public productsService: ProductsService,public userService : UsersService, public router : Router, public apiChatService: ChatService) { }

  nuevoChat() {
    this.apiChatService.postChat(new Chat(this.userService.user.user_id, this.userService.user2.user_id, this.userService.user.nickname, this.userService.user.foto, this.userService.user2.nickname, this.userService.user2.foto)).subscribe((data) => {
      console.log(data);
    })
    this.router.navigateByUrl('/chat');
  }

  ngOnInit(): void {
    let user = this.userService.userAllPages();
    let id  = this.userService.user2.user_id;
    this.productsService.getUserProducts(id).subscribe((data: Products[]) => {
      this.productosVendedor = data;
    })
   
  }

}
