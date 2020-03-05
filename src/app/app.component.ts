import { Component } from '@angular/core';
import {ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = null;
  constructor(private apiService: ApiService) {}
  title = 'final-project';
  ngOnInit() {
  this.data = this.apiService.getList().subscribe((data) => console.log(data));
}
}

