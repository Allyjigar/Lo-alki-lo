import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = "http://localhost:9191/chat";
  public chat : Chat

  constructor(private http : HttpClient) { }
  getChat(id1 : number, id2 : number) {
    return this.http.get(this.url + "?id1=" + id1 + "&id2=" + id2);
  }
  postChat(newChat : Chat) {
    return this.http.post(this.url, newChat);
  }
}
