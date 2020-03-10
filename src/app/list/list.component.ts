import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public favs: FavoriteService) { }

  ngOnInit() {

  }
 
}
