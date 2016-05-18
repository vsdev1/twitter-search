import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class TwitterService {

  constructor (private http: Http) {

  }

  getArticles(searchTerm:string):Observable<any> {
    return this.http.get(`http://content.guardianapis.com/search?api-key=test&q=${searchTerm}`).map(response => response.json());
  }

}
