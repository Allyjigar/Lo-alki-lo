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

  constructor(public usersService: UsersService, public router: Router) {
    this.user
   }

  // modificarUsuario(){
  //   this.usersService.putUser(new Users()).subscribe((data:any) => {
  //     console.log(data);
  //     swal.fire({
  //       position: 'top-end',
  //       icon: 'success',
  //       title: 'Usuario modificado con éxito',
  //       showConfirmButton: false,
  //       timer: 2000
  //     })
  //   })
  // }

  ngOnInit(): void {

    // this.usersService.funcion en el servicio q haga un get de usuario()
  }

}
