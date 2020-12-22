import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  
  private url = "http://localhost:9191/mensajes/emisor";
  private urlR= "http://localhost:9191/mensajes/receptor";
  

  constructor(private http : HttpClient) { }

  getMensajeEmi(idChat : number, idUser : number) {
    return this.http.get(this.url + "?id=" + idChat + "&id2=" + idUser);
  }
  getMensajeRece(idChat : number, idUser : number){
    return this.http.get(this.urlR + "?idChat=" + idChat + "&idUser=" + idUser);
  }
  postMensaje(newMensaje : Mensaje) {
    return this.http.post(this.url, newMensaje);
  }
}
