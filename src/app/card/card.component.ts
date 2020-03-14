import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  charityData;
  data = null;
  constructor(public favs: FavoriteService, public apiService: ApiService ) { }
  // causeUrl = "https://api.data.charitynavigator.org/v2/Organizations?app_id=0e8799c4&app_key=673f09ef0609a336db46bd2cc7630d6e&categoryID=6";
  ngOnInit() {
    this.apiService.getRandomCause().subscribe((data) => this.data = data);
  }
  swipeRight(){
    //api call store response in array
   this.apiService.getRandomCause().subscribe((charityData) => {
     this.charityData = charityData;
     this.favs.addFavorites(charityData);
    }
     );
    //  let charityType = this.favs.addFavorites(this.causeUrl[index]);
  //   console.log(charityType);
  }

}
