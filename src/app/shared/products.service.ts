import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Products } from '../models/products';
import { Renting } from '../models/renting';
import { Favorito } from '../models/favorito';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public favoritos: Favorito [];
  public favorito: Favorito;
  public rent: Renting;
  public product: Products;
  public products: Products[];
  public peticionAlquilados : any [] = [0,"","",0,"","","","",0,0,0,0,0,"","",0,0,"",0,0];
  public anuncioid : number;
  //Obtener anuncios 
  private url = "http://localhost:9191/home";
  private url2 = "http://localhost:9191/anuncio";
  private url3 = "http://localhost:9191/products";
  private url4 = "http://localhost:9191/favoritos";
  private url5 = "http://localhost:9191/products/ad";
  private url6 = "http://localhost:9191/products/rent";
  private url7 = "http://localhost:9191/products/search"
  private url8 = "http://localhost:9191/favorito";
  private url9 = "http://localhost:9191/product";
  private url10 = "http://localhost:9191/products/renting";
  

  constructor(private http: HttpClient) { }
  //Por ID
  getProducts() {
    return this.http.get(this.url)
  }
  //Subir producto
  postProduct(newProduct: Products) {
  return this.http.post(this.url3, newProduct);
  } 
  //Modifica productos
  putProduct(newProduct : Products) {
    return this.http.put(this.url3, newProduct);
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
  getProductConId(product_id : number) {
    return this.http.get(this.url9 + "?product_id=" + product_id)
  }
  //Renting:
  getRenting(arrendatario_id : number) {
    return this.http.get(this.url10 + "?arrendatarioid=" + arrendatario_id);
  }

//Por nombre/Categoria/Subcategoria (Busqueda)

  //Por nombre (búsqueda)
  getSearchProduct(name: string) {
    return this.http.get(this.url7 + "?name=" + name);
  }
  
  //Categoria/Subcategoria (Busqueda)

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

  //Mostrar por Usuario(favoritos)

  getFavProducts(user_id: number) {
    return this.http.get(this.url4 + "?user_id=" + user_id);

  }
  getFavProduct(user_id: number, product_id: number) {
    return this.http.get(this.url8 + "?user_id" + user_id + "&product_id" + product_id)
  }

  // Anadir favorito
  postFavProducts(newFavorito: Favorito) {
    return this.http.post(this.url4, newFavorito);
  }
  //Eliminar favorito
  deleteFav(id: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        favourites_id: id
      },
    };
    return this.http.delete(this.url4, options)
  }

  
}

