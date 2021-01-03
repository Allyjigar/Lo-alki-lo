import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Products } from '../models/products';
import { Renting } from '../models/renting';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public rent: Renting;
  public product: Products;
  public products: Products[];
  //Obtener anuncios 
  private url = "http://localhost:9191/home";
  private url2 = "http://localhost:9191/anuncio";
  private url3 = "http://localhost:9191/products";
  private url4 = "http://locahost:9191/favoritos";
  private url5 = "http://localhost:9191/products/ad";
  private url6 = "http://localhost:9191/products/rent";

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
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        product_id: id
      },
    };
    return this.http.delete(this.url3, options)
  }

  getProduct(id: number) {
    return this.http.get(this.url2 + id)
  }

  //Por nombre/Categoria/Subcategoria (Busqueda)

  //Por Usuario(subidos)
  getUserProducts(user_id: number) {
    return this.http.get(this.url3 + "?user_id=" + user_id);
  }

  //Por Usuario(alquilados)

  getProductsAd(user_id: number) {
    return this.http.get(this.url5 + "?user_id=" + user_id);
  }

  //Peticiones
  getProductsRent(user_id) {
    return this.http.get(this.url6 + "?user_id=" + user_id);
  }
  //Aceptar Solicitud
  putProductsRent(rent_id,alquilado, valorado){
    const options = {
      headers : new HttpHeaders({
        'ContentType' : 'application/json',
      }),
      body : {
        alquilado : alquilado,
        valorado : valorado,
        renting_id : rent_id
      },
    };
    return this.http.put(this.url6,options)
  }
  //Rechazar Solicitud
  deleteProductsRent(rent_id){
    const options = {
      headers : new HttpHeaders({
        'ContentType' : 'application/json',
      }),
      body : {
        renting_id : rent_id
      },
    }
    return this.http.delete(this.url6,options)
  }
  //Por Usuario(favoritos)

  getFavProducts(favourites_id: number) {
    return this.http.get(this.url4 + "?favourites_id=" + favourites_id);

  }

}

