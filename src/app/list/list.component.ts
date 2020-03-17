import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  likedCharities = [];
  selectedFavorite = [];
  constructor(public favs: FavoriteService) { }

  ngOnInit() {
    this.likedCharities = this.favs.charityArray;
    console.log(this.likedCharities);
  }
 

  selectFavorite(charity) {
    this.selectedFavorite = this.favs.selectedFavorite;
    this.favs.selectedFavorite.push(charity);
    console.log(this.favs.selectedFavorite);
  }
}
