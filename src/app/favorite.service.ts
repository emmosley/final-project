import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
favorites = [];
  constructor() { }
  
  addFavorites(id) {
    this.favorites.push(id);
  }
}
