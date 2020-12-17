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

  
}
