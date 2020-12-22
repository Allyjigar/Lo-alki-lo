import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(public userService : UsersService) { }

  ngOnInit(): void {
    let user = this.userService.userAllPages();
  }

}
