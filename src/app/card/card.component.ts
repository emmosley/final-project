import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {FavoriteService } from '../favorite.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  causes = [
    {
      causeID: 11,
      img: "https://ruinmyweek.com/wp-content/uploads/2020/01/qRpo7BE.jpg"
    },
    {
      causeID: 12,
      img: "https://starecat.com/content/wp-content/uploads/me-laughing-at-corona-virus-memes-it-is-now-in-europe-in-my-country-in-my-city.jpg"
    },
    {
      causeID: 32,
      img: "https://i.chzbgr.com/full/8971143680/hEC8382C3/%22"
    }
  ];charityData;
  data = null;
  cause = null;
  constructor(public favs: FavoriteService, public apiService: ApiService ) { }
  // causeUrl = "https://api.data.charitynavigator.org/v2/Organizations?app_id=0e8799c4&app_key=673f09ef0609a336db46bd2cc7630d6e&categoryID=6";
  ngOnInit() {
    this.apiService.getRandomCause().subscribe((cause) => this.cause = cause);
    //TODO get random cause, set this.cause { causeID: 5 }
  }
  swipeRight(){
    //api call store response in array
   this.apiService.getCharitiesForCause().subscribe((charityData) => {
     this.charityData = charityData;
     this.favs.addFavorites(charityData);
    }
     );
    //  let charityType = this.favs.addFavorites(this.causeUrl[index]);
  //   console.log(charityType);
  }
  dislike() {
    this.causes.splice(0,1);
    console.log(this.causes);
  }
}
