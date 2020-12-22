import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent implements OnInit {



  constructor(public userService : UsersService) { }

  ngOnInit(): void {
    let user = this.userService.userAllPages();
  }

}
