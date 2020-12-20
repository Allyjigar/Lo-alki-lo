import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/shared/users.service';
import swal from 'sweetalert2';

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
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrectos',
        })
        //alert("Email o contraseña incorrectos")
      } else {
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bienvenido a Lo(alki)lo',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl('/home');
        this.usersService.user = data [0];
      }
    });
  }

  ngOnInit(): void {
  }

}
