import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorito } from '../models/favorito';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  public favoritos: Favorito[];
  public favorito: Favorito;
  public favourites_id: number;
  private url = "http://localhost:9191/favoritos";
  private url2 = "http://localhost:9191/favorito";

  constructor(private http: HttpClient) { }

  getFavProducts(user_id: number) {
    return this.http.get(this.url + "?user_id=" + user_id);

  }
  getFavProduct(user_id: number, product_id: number) {
    return this.http.get(this.url2 + "?user_id" + user_id + "&product_id" + product_id)
  }

  // Anadir favorito
  postFavProducts(newFavorito: Favorito) {
    return this.http.post(this.url, newFavorito);
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
    return this.http.delete(this.url, options)
  }
}
