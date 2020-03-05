import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "https://api.data.charitynavigator.org/v2/Organizations?app_key=673f09ef0609a336db46bd2cc7630d6e&app_id=0e8799c4&state=MI";
  postCode = 48009;

  constructor(private http: HttpClient) { }
  getList = () => this.http.get(this.apiUrl);;
}
