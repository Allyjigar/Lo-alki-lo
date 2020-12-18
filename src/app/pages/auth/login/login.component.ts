import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: Users = new Users("", "", "", "");
 
  constructor(public usersService: UsersService, public router: Router) { }
 
  login(nickname: HTMLInputElement, password: HTMLInputElement) {
    
    this.usersService.postUserL(new Users(nickname.value, password.value, "", "")).subscribe( (data: Users[]) => {
      console.log(data);
    
      if (data.length === 0){
        alert("Email o contraseña incorrectos")
      } else {
        this.router.navigateByUrl('/home');
        this.usersService.user = data [0];
      }
    });
  }

  ngOnInit(): void {
  }

}
