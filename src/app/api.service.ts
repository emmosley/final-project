import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  categoriesURL = "https://api.data.charitynavigator.org/v2/Categories?app_id=0e8799c4&app_key=673f09ef0609a336db46bd2cc7630d6e"; 
  apiUrl: string = "https://api.data.charitynavigator.org/v2/Organizations?app_key=673f09ef0609a336db46bd2cc7630d6e&app_id=0e8799c4";
  postCode = 48009;
  causeIdOptions = [17, 28, 44, 16, 15, 18, 29, 37, 33, 41, 40, 38, 9, 39, 7, 8, 36, 19, 20, 30, 31, 21, 25, 26, 32, 1, 2, 6, 3, 4, 5, 10, 11, 34, 13, 12, 14, 22, 23, 27, 42, 43, 35, 24]; 
  causeNumber = this.causeIdOptions[Math.floor(Math.random() * this.causeIdOptions.length)];
  causeUrl = `https://api.data.charitynavigator.org/v2/Organizations?app_key=673f09ef0609a336db46bd2cc7630d6e&app_id=0e8799c4&causeID=${this.causeNumber}`
  // this.apiUrl.concat("&causeID=", this.causeNumber);

  // categoryIdOptions = [6, 3, 7];
  // categoryNumber: number = this.categoryIdOptions[Math.floor(Math.random() * this.categoryIdOptions.length)];
  
  // categoryUrl = this.apiUrl.concat("&categoryID=", this.categoryNumber);

  constructor(private http: HttpClient) { }
  getList = () => this.http.get(this.apiUrl);
  getRandomCause = () => this.http.get(this.causeUrl);
  // getCategoriesList = () => this.http.get(this.categoryUrl);

}
