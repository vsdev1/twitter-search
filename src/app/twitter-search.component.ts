import { Component } from '@angular/core';
import {TwitterService, Article} from './twitter.service';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/flatMap';

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
    
    this.articles = this.input
      .map((val)=>val)
      .filter((term)=>term.length>3)
      .debounceTime(1000)
      .map((term)=>this.twitterService.getArticles(term));
    
  }

  filter(searchValue:string) {
    this.input.next(searchValue);
  }
}
