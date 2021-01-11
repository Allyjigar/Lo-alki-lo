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
  public misProductosAlquilados: any[] = [0, "", "", 0, "", "", "", "", 0, 0, 0, 0, 0, "", "", 0, 0, "", 0, 0];
  //public peticionAlquilados : any [] = [0,"","",0,"","","","",0,0,0,0,0,"","",0,0,"",0,0];
  public anuncioid: number;
  //Obtener anuncios 
  private url = "http://localhost:9191/home";
  private url2 = "http://localhost:9191/anuncio";
  private url3 = "http://localhost:9191/products";
  private url4 = "http://localhost:9191/products/ad";
  private url5 = "http://localhost:9191/products/rent";
  private url6 = "http://localhost:9191/search/products";
  private url7 = "http://localhost:9191/product";
  private url8 = "http://localhost:9191/products/renting";
  private url9 = "http://localhost:9191/products/rentingid";
  private url10 = "http://localhost:9191/products/search/precio";



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
  putProduct(newProduct: Products) {
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
    return this.http.get(this.url2 + "?id=" + id)
  }
  getProductConId(product_id: number) {
    return this.http.get(this.url7 + "?product_id=" + product_id)
  }
  //Renting:
  getRenting(arrendatario_id: number) {
    return this.http.get(this.url8 + "?arrendatarioid=" + arrendatario_id);
  }
  //Por nombre/categoria/subcategoria (búsqueda)
  getSearchProduct(name: string) {
    return this.http.post(this.url6,{name:name});
  }
  //Por precio
  getSearchProductPrice(precio: number, precio2: number) {
    return this.http.get(this.url10 + "?precio=" + precio + "&precio2=" + precio2);
  }
  //Por Usuario(subidos)
  getUserProducts(user_id: number) {
    return this.http.get(this.url3 + "?user_id=" + user_id);
  }
  //Por Usuario(alquilados)
  getProductsAd(user_id: number) {
    return this.http.get(this.url4 + "?user_id=" + user_id);
  }
  //Peticiones
  getProductsRent(user_id: number) {
    return this.http.get(this.url5 + "?user_id=" + user_id);
  }
  putProductAd(renting: Renting) {
    return this.http.put(this.url4, renting);
  }
  //Get Renting_id
  getRentingID(arrendatario_id: number, product_id: number) {
    return this.http.get(this.url10 + "?arrendatarioid=" + arrendatario_id + "&product_id=" + product_id);
  }
  //Aceptar Solicitud
  putProductsRent(rent_id, alquilado, valorado) {
    let body = {
        alquilado: alquilado,
        valorado: valorado,
        renting_id: rent_id
      };
    return this.http.put(this.url4, body)
  }
  //Rechazar Solicitud
  deleteProductsRent(rent_id) {
    const options = {
      headers: new HttpHeaders({
        'ContentType': 'application/json',
      }),
      body: {
        renting_id: rent_id
      },
    }
    return this.http.delete(this.url5, options)
    
  }
  //Por Usuario(favoritos)

  getFavProducts(favourites_id: number) {
    return this.http.get(this.url4 + "?favourites_id=" + favourites_id);

  }
  entradaSolicitud (date,duration,user_id)
  {
    let body = {
        duration: duration,
        date: date,
        product_id: this.product.product_id,
        alquilado: 0,
        valorado: 0,
        arrendatario_id: user_id
      }
    console.log(body)
    return this.http.post(this.url4, body)
  
}

}
