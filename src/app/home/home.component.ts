import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
data = null;
state;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
 
   
  }

  searchFunction(state) {
    this.apiService.stateID = state;
    console.log(state);
  }

}
