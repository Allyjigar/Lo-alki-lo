import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = "http://localhost:9191/users";
  private urlRegister = "http://localhost:9191/users/register";
  private urlLogin = "http://localhost:9191/users/login";
  public user : Users; //Este es el user que usamos para toda la web una vez logeado
  
  constructor(private http : HttpClient) { }

  getUser(id : number) {
    return this.http.get(this.url + "?id=" + id);
  }
  postUserR(newUser : Users) {
    return this.http.post(this.urlRegister, newUser);
  }
  postUserL(newUser : Users) {
    return this.http.post(this.urlLogin, newUser);
  }
  putUser(newUser : Users) {
    return this.http.put(this.url, newUser);
  }
}
