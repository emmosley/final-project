import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
charityArray = [];
  constructor() { }
  
  addFavorites(cause) {
    this.charityArray.push(cause);
  }
}
