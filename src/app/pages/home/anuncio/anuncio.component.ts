import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  public claseFav = "fa fa-heart-o fa_custom";

  favorito() {

    if (this.claseFav === "fa fa-heart-o fa_custom"){
        this.claseFav = "fa fa-heart fa_custom";
    } else {
      this.claseFav = "fa fa-heart-o fa_custom";
    }
 
  }



  constructor() { }

  ngOnInit(): void {
  }


}
