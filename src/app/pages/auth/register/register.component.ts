import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/shared/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

<<<<<<< HEAD
  public user: Users = new Users("", "", "", "");
  public confirmPassword: any;

  constructor(public usersService: UsersService, public router: Router) {
=======
  public user: Users = new Users("", "", "");
  
  
  constructor(public usersService: UsersService) 
  {
>>>>>>> mauro_chat
    this.user
  }


  insertarUsuario(nickname: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement, confirmPassword: HTMLInputElement, foto: HTMLInputElement) {
    if (password == confirmPassword) {
      this.usersService.postUserR(new Users(nickname.value, password.value, foto.value, email.value)).subscribe((data: any) => {
        console.log(data);

        if (data.insertId != 0) {
          this.router.navigateByUrl('/myprofile');
        } else {
          alert("El usuario ya existe");
        }

      })
      
    } else {
      alert("Las contraseñas no coinciden");
    }


  }




  ngOnInit(): void {
  }

}
