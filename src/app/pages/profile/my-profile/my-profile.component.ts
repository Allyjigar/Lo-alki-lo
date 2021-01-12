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
  public picture: string;

  constructor(public userService: UsersService, public router: Router) {
    this.user = this.userService.user;
    this.picture = this.user.foto;
    console.log(this.userService.user);
  }


  modificarUsuario(nickname, password, foto, email, name, direccion, ciudad, cp) {
    let actualUser;
    
    if ( foto == "") {
      foto = this.userService.user.foto;
      actualUser = new Users(nickname, password, foto, "", email, name, direccion, ciudad, Number(cp));
    } else {
      actualUser = new Users(nickname, password, foto, "", email, name, direccion, ciudad, Number(cp));
    }
     actualUser.user_id = this.user.user_id;
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
    let user = this.userService.userAllPages();
    
  }

}
