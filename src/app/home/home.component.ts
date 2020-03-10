import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
data = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.data = this.apiService.getList().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });

  }

}
