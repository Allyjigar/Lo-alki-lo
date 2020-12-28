import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

  private url = "http://localhost:9191/products/valoraciones";
  
  constructor(public productService: ProductsService, private http: HttpClient) { }
  
  putValoracioes(valoratedProduct : Products) {
    return this.http.put(this.url, valoratedProduct);
  }

}
