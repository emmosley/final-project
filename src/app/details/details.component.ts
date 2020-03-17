import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  favoriteCharity = [];
  constructor(public favs: FavoriteService) {
  }

  ngOnInit() {
    this.favoriteCharity = this.favs.selectedFavorite;
    console.log(this.favs.selectedFavorite);
  }

}
