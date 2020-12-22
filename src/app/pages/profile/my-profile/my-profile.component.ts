import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/shared/users.service';
import { PerfilUsuarioComponent } from '../../home/anuncio/perfil-usuario/perfil-usuario.component';
import swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public user: Users = new Users("", "", "", "");

  constructor(public userService: UsersService, public router: Router) {
    this.user
  }

  modificarUsuario(nickname: HTMLInputElement, password: HTMLInputElement, foto: HTMLInputElement, email: HTMLInputElement, name: HTMLInputElement, direccion: HTMLInputElement, ciudad: HTMLInputElement, cp: HTMLInputElement) {
    let actualUser = new Users(nickname.value, password.value, foto.value, "", email.value, name.value, direccion.value, ciudad.value, Number(cp.value));
    actualUser.user_id = this.userService.user.user_id;
    this.userService.putUser(actualUser).subscribe((data: any) => {
      console.log(data);
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario modificado con éxito',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }

  ngOnInit(): void {

    // this.usersService.funcion en el servicio q haga un get de usuario()
  }

}
