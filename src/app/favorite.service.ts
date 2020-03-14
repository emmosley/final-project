import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
charityArray = [];
  constructor() { }
  
  addFavorites(newCharities) {
    for (const charity of newCharities) {
      this.charityArray.push(charity);
    }
    console.log(this.charityArray);
  }
}
