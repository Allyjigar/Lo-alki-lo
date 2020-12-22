import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.component.html',
  styleUrls: ['./valoraciones.component.css']
})
export class ValoracionesComponent implements OnInit {

  constructor(public userService : UsersService) { }

  ngOnInit(): void {
    let user = this.userService.userAllPages();
  }

}
