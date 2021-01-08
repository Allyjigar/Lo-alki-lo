import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { Mensaje } from 'src/app/models/mensaje';
import { Users } from 'src/app/models/users';
import { ChatService } from 'src/app/shared/chat.service';
import { MensajesService } from 'src/app/shared/mensajes.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chatSelected : Chat;
  public user : Users;
  public chats : Chat [] = [];
  //public mensaje : Mensaje = new Mensaje ("", 0, 0, "");
  public mensajes : Mensaje [] = [];

  constructor(public apiChatService : ChatService, public apiMensajeService : MensajesService, public userService : UsersService) {
    

   }
/* 
   allChats() {
    console.log(this.userService.user.user_id);
    let num = this.userService.user.user_id;
    this.apiChatService.getChat(num).subscribe((data : Chat []) => {
      this.chats = data;
    })
   }

  selectChat(idChat: number) {
    this.apiMensajeService.getMensaje(idChat).subscribe((data : Mensaje []) => {
      this.mensajes = data;
      console.log(data);
    })
  }
  */
  newchat(chat : Chat) {
    this.apiChatService.postChat(chat).subscribe((data) => {
      console.log(data);
    })
  }

  getMensajes(chat : Chat) {
    this.apiMensajeService.getMensajes(chat.chat_id).subscribe((data : Mensaje []) => {
      this.mensajes = data;
      this.chatSelected = chat;
    })
  }

 nuevoMensaje(mensaje : HTMLInputElement, chat_id : number) {
    let d = new Date();
    let fecha = d.getFullYear() + "-" + d.getMonth() + 1 + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let newMensaje : Mensaje = new Mensaje(mensaje.value, chat_id, this.userService.user.user_id, fecha);
      this.apiMensajeService.postMensaje(newMensaje).subscribe((data) => {
        this.getMensajes(this.chatSelected);
    });
    mensaje.value = " ";
   
  }
  
  ngOnInit(): void {
    this.apiChatService.getChat(this.userService.user.user_id).subscribe((data: Chat[]) => {
      this.chats = data;
    })
    let user = this.userService.userAllPages();
  }

}
