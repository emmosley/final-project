import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
charityArray = [];
selectedFavorite = [];
  constructor() { }
  
  addFavorites(newCharities) {
    for (const charity of newCharities) {
      this.charityArray.push(charity);
    }
    console.log(this.charityArray);
  }
}
