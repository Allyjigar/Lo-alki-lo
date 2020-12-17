import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Products } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 


  public product : Products;
  //Obtener anuncios 
  private url = "http://localhost:9191/home";
  constructor(private http: HttpClient) { }
  //Por ID
  getProducts() {
    return this.http.get(this.url)
  }
}
//Por nombre/Categoria/Subcategoria (Busqueda)

//Por Usuario(subidos)
//Por Usuario(alquilados)

//Por Usuario(favoritos)

