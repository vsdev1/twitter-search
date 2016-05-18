import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class TwitterService {

  constructor(private http:Http) {

  }

  getArticles(searchTerm:string):Observable<Array<Article>> {
    return this.http.get(`http://content.guardianapis.com/search?api-key=test&q=${searchTerm}`).map(response => response.json().response.results.map(apiArticle=>new Article(apiArticle)));
  }

}

class Article {
  id:string;
  webTitle:string;
  webUrl:string;

  constructor(apiArticle:any) {
    this.id = apiArticle.id;
    this.webTitle = apiArticle.webTitle;
    this.webUrl = apiArticle.webUrl;
  }
}
