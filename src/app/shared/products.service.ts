import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Products } from '../models/products';


@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class ProductsService { 
=======
export class ProductsService {

>>>>>>> mikel
  public product : Products;
  public products : Products[];
  public anuncioid : number;
  //Obtener anuncios 
  private url = "http://localhost:9191/home";
<<<<<<< HEAD
  private url2 = "http://localhost:9191/products";
=======
  private url2 = "http://localhost:9191/anuncio";
>>>>>>> mikel
  constructor(private http: HttpClient) { }
  //Por ID
  getProducts() {
    return this.http.get(this.url)
  }
<<<<<<< HEAD

  //Subir producto
  postProduct(newProduct: Products) {
  return this.http.post(this.url2, newProduct);
}
//Eliminar producto
  deleteProduct(id: number) {
    return this.http.delete(this.url2 + id);
=======
  getProduct(id : number)
  {
    return this.http.get(this.url2+id)
>>>>>>> mikel
  }
}
//Por nombre/Categoria/Subcategoria (Busqueda)

//Por Usuario(subidos)
//Por Usuario(alquilados)

//Por Usuario(favoritos)


