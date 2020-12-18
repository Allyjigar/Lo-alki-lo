import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = "http://localhost:9191/chat";
  public chat : Chat;

  constructor(private http : HttpClient) { }
  getChat(id : number) {
    return this.http.get(this.url + "?id=" + id);
  }
  postChat(newChat : Chat) {
    return this.http.post(this.url, newChat);
  }
}
