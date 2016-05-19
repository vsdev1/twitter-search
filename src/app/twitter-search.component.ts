import { Component } from '@angular/core';
import {TwitterService, Article} from './twitter.service';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/do';

@Component({
  moduleId: module.id,
  selector: 'twitter-search-app',
  templateUrl: 'twitter-search.component.html',
  styleUrls: ['twitter-search.component.css'],
  providers: [TwitterService]
})
export class TwitterSearchAppComponent {
  title = 'twitter-search works!';

  searchTerm: string;
  input: Subject<string>;
  articles: Observable<Array<Article>>;

  constructor(private twitterService:TwitterService) {
    this.input = new Subject<string>();
    
    const emptySearchResults = this.input
      .filter((term) => term.length <= 3)
      .map((term)=>[]);

    this.articles = this.input
      .do((term)=>console.log('term:', term))
      .filter((term)=>term.length > 3)
      .debounceTime(100)
      .mergeMap((term)=>this.twitterService.getArticles(term))
      .merge(emptySearchResults);


  }

  filter(searchValue:string) {
    this.input.next(searchValue);
  }
}
