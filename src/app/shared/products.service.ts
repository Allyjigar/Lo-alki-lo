import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Products } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public product : Products;
  public products : Products[];
  public peticionAlquilados : any [] = [0,"","",0,"","","","",0,0,0,0,0,"","",0,0,"",0,0];
  public anuncioid : number;
  //Obtener anuncios 
  private url = "http://localhost:9191/home";
  private url2 = "http://localhost:9191/anuncio";
  private url3 = "http://localhost:9191/products";
  private url4 = "http://localhost:9191/product";
  private url5 = "http://localhost:9191/products/renting";
  

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
    return this.http.delete(this.url3 + id);
  }
  getProduct(id : number)
  {
    return this.http.get(this.url2 + id)
  }
  getProductConId(product_id : number) {
    return this.http.get(this.url4 + "?product_id=" + product_id)
  }
  //Renting:
  getRenting(arrendatario_id : number) {
    return this.http.get(this.url5 + "?arrendatarioid=" + arrendatario_id);
  }
}
//Por nombre/Categoria/Subcategoria (Busqueda)

//Por Usuario(subidos)
//Por Usuario(alquilados)

//Por Usuario(favoritos)


