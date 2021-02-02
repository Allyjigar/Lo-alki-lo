import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/shared/users.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: Users = new Users("", "", "", "");
  public confirmPassword: any;

  constructor(public userService: UsersService, public router: Router) {
    this.user
  }


  insertarUsuario(nickname: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement, confirmPassword: HTMLInputElement, foto: HTMLInputElement) {
      let fotoAssets: string;
      if (foto.value != null) {
        fotoAssets = foto.value.replace("C:\\fakepath\\", "/assets/");
      }

      if (password.value == confirmPassword.value) {
        this.userService.postUserR(nickname.value, password.value, fotoAssets, email.value).subscribe((data: any) => {
          console.log(data);

          if (data.insertId != 0) {
            swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Usuario registrado con éxito',
              showConfirmButton: false,
              timer: 2000
            })
            this.router.navigateByUrl('/login');
          } else {
            swal.fire({
              icon: 'error',
              title: 'Uuupps...',
              text: 'El usuario ya existe',
            })

          }

        })
      } else {
        swal.fire({
          icon: 'error',
          title: 'Uuupps...',
          text: 'Las contraseñas no coinciden',
        })

      }
}

    ngOnInit(): void {
    }

  }
