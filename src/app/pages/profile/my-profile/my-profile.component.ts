import { Component, OnInit } from '@angular/core';
import { PerfilUsuarioComponent } from '../../home/anuncio/perfil-usuario/perfil-usuario.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // this.usersService.funcion en el servicio q haga un get de usuario()
  }

}
