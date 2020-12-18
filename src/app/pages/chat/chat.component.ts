import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { Mensaje } from 'src/app/models/mensaje';
import { ChatService } from 'src/app/shared/chat.service';
import { MensajesService } from 'src/app/shared/mensajes.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  
  public chats : Chat [] = [];
  public mensaje : Mensaje = new Mensaje ("", 0, 0, "");
  public mensajes : Mensaje [] = [];

  constructor(private apiChatService : ChatService, private apiMensajeService : MensajesService, private userService : UsersService) {
    
    

   }

  selectChat(idChat: number) {
    this.apiMensajeService.getMensaje(idChat).subscribe((data : Mensaje []) => {
      this.mensajes = data;
      console.log(data);
    })
  }

  newchat(chat : Chat) {
    this.apiChatService.postChat(chat).subscribe((data) => {
      console.log(data);
    })
  }
  
  selectMensajes(chat_id : number) {
    this.apiMensajeService.getMensaje(chat_id).subscribe((data) => {
      console.log(data);
    })
  }

  nuevoMensaje(newMensaje :  Mensaje) {
    this.apiMensajeService.postMensaje(newMensaje).subscribe((data) => {
      console.log(data);
    })
  }
  
  ngOnInit(): void {
    this.apiChatService.getChat(this.userService.user.id).subscribe((data: Chat[]) => {
      this.chats = data;
    })
  }

}
