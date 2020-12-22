import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = "http://localhost:9191/users";
  private url2 = "http://localhost:9191/user";
  private urlRegister = "http://localhost:9191/users/register";
  private urlLogin = "http://localhost:9191/users/login";
  public user : Users; //Este es el user que usamos para toda la web una vez logeado
  
  constructor(private http : HttpClient) { }

  getUser(id : number) {
    return this.http.get(this.url + "?id=" + id);
  }
  getUserNick(nickname: string) {
    return this.http.get(this.url2 + "?nickname=" + nickname);
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
  storeUser(loginUser : Users) {
    localStorage.setItem('UserId', String(loginUser.user_id));
  }
  async userAllPages() {
    if (this.user == null) {
      let userId =  parseInt(localStorage.getItem('UserId'));
      let data = await this.getUser(userId).toPromise();
      this.user = data[0];
    } 

    return this.user;
  }
}
