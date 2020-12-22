import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-subir-producto',
  templateUrl: './subir-producto.component.html',
  styleUrls: ['./subir-producto.component.css']
})
export class SubirProductoComponent implements OnInit {

  constructor(public userService : UsersService) { }

  ngOnInit(): void {
    let user = this.userService.userAllPages();
  }

}
