import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Products } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public product : Products;
  public products : Products[];
  public anuncioid : number;
  //Obtener anuncios 
  private url = "http://localhost:9191/home";
  private url2 = "http://localhost:9191/anuncio";
  constructor(private http: HttpClient) { }
  //Por ID
  getProducts() {
    return this.http.get(this.url)
  }
  getProduct(id : number)
  {
    return this.http.get(this.url2+id)
  }
}
//Por nombre/Categoria/Subcategoria (Busqueda)

//Por Usuario(subidos)
//Por Usuario(alquilados)

//Por Usuario(favoritos)

