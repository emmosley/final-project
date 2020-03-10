import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public favs: FavoriteService ) { }

  ngOnInit() {
  }
  swipeRight(ein: number){
    this.favs.addFavorites(ein);
  }

}
