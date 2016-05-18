import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';

@Injectable()
export class TwitterService {

  constructor (private http: Http) {

  }

  getArticles(searchTerm:string):Observable<any> {
    return this.http.get('http://content.guardianapis.com/search?q=football&api-key=test').map(response => response.json());
  }

}
