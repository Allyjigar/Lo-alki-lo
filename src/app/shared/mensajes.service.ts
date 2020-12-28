import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  
  private url = "http://localhost:9191/mensajes";
  
  

  constructor(private http : HttpClient) { }

  getMensajes(idChat : number) {
    return this.http.get(this.url + "?chat_id=" + idChat);
  }

  postMensaje(newMensaje : Mensaje) {
    return this.http.post(this.url, newMensaje);
  }
}
