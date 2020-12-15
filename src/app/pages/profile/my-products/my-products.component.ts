import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  public isHidden: boolean = true;
  public isHidden2: boolean = true;
  public isHidden3: boolean = true;
  constructor() { }
  mostrarMisProductos() {
    if (this.isHidden == true) {
      this.isHidden = false;
      this.isHidden2 = true;
      this.isHidden3 = true;
    } else {
      this.isHidden = true;
      this.isHidden2 = true;
      this.isHidden3=true;
    }
  }
  mostrarOtrosProductos() {
    if (this.isHidden2 == true) {
      this.isHidden = true;
      this.isHidden2 = false;
      this.isHidden3 = true;
    } else {
      this.isHidden = true;
      this.isHidden2 = true;
      this.isHidden3=true;
    }
  }
  mostrarPeticiones()
  {
    if (this.isHidden3 == true) {
      this.isHidden = true;
      this.isHidden2 = true;
      this.isHidden3 = false;
    } else {
      this.isHidden = true;
      this.isHidden2 = true;
      this.isHidden3=true;
    }
  }
  ngOnInit(): void {
  }

}
