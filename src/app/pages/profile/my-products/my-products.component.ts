import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  public isHidden: boolean = true;
  public isHidden2: boolean = false;
  constructor() { }
  mostrarMisProductos() {
    if (this.isHidden == true) {
      this.isHidden = false;
      this.isHidden2 = true;
    } else {
      this.isHidden = true;
      this.isHidden2 = true;
    }
  }
  mostrarOtrosProductos() {
    if (this.isHidden2 == true) {
      this.isHidden2 = false;
      this.isHidden = true;
    } else {
      this.isHidden = true;
      this.isHidden2 = true;
    }
  }
  ngOnInit(): void {
  }

}
