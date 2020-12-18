import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/shared/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: Users = new Users("", "", "");
  
  
  constructor(public usersService: UsersService) 
  {
    this.user
  }

  insertarUsuario(nickname: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement, foto: HTMLInputElement)
  {
    this.usersService.postUserR(new Users(nickname.value, email.value, password.value, foto.value)).subscribe((data) =>
    {
      console.log(data);
    })
  }
  

  

  ngOnInit(): void {
  }

}
