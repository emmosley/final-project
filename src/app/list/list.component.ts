import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  likedCharities = [];
  // selectedFavorite = [];
  wasClicked = false;
  constructor(public favs: FavoriteService) { }

  ngOnInit() {
    this.likedCharities = this.favs.charityArray;
    console.log(this.likedCharities);
  }
 

  selectFavorite(charity) {
    if (!this.favs.selectedFavorite.includes(charity)) {
       this.favs.selectedFavorite.push(charity); 
    } else {
    let index = this.favs.charityArray.indexOf(charity);
    this.favs.selectedFavorite.splice(index, 1); 
  }
    this.wasClicked = !this.wasClicked;
    console.log(this.wasClicked);
    console.log(index);
  }
  

}
