import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = "http://localhost:9191/products";
  public product : Products;
  
  constructor(private http : HttpClient) { }

  getProduct(id : string) {
    return this.http.get(this.url + "?id=" + id); 
  }
  postProduct(newProduct : Products) {
    return this.http.post(this.url, newProduct);
  }
  putProduct(newProduct : Products) {
    return this.http.put(this.url, newProduct);
  }
  deleteProduct(id: number) {
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'}), body : {id : id}};
    return this.http.delete(this.url, options);
  }
}
