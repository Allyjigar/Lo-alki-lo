import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Products } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public product: Products;
  public products: Products[];
  //Obtener anuncios 
  private url = "http://localhost:9191/home";
  private url2 = "http://localhost:9191/anuncio";
  private url3 = "http://localhost:9191/products";
  private url4 = "http://locahost:9191/favoritos";
  constructor(private http: HttpClient) { }
  //Por ID
  getProducts() {
    return this.http.get(this.url)
  }
  //Subir producto
  postProduct(newProduct: Products) {
  return this.http.post(this.url3, newProduct);
}
//Eliminar producto
  deleteProduct(id: number) {
    return this.http.delete(this.url3 + id);
  }
  getProduct(id : number)
  {
    return this.http.get(this.url2 + id)
  }

  //Por nombre/Categoria/Subcategoria (Busqueda)

  //Por Usuario(subidos)
  getUserProducts(user_id: number) {
    return this.http.get(this.url3 + "?user_id=" + user_id);
  }

  //Por Usuario(alquilados)



  //Por Usuario(favoritos)
  getFavProducts(favourites_id: number) {
    return this.http.get(this.url4 + "?favourites_id=" + favourites_id);

  }

}

