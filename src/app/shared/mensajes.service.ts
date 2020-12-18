import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  
  private url = "http://localhost:9191/mensajes";
  public mensaje : Mensaje = new Mensaje ("", 0, 0, "");

  constructor(private http : HttpClient) { }

  getMensaje(id : number) {
    return this.http.get(this.url + "?id=" + id);
  }
  postMensaje(newMensaje : Mensaje) {
    return this.http.post(this.url, newMensaje);
  }
}
