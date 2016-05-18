import { Component } from '@angular/core';
import {TwitterService} from './twitter.service';

@Component({
  moduleId: module.id,
  selector: 'twitter-search-app',
  templateUrl: 'twitter-search.component.html',
  styleUrls: ['twitter-search.component.css'],
  providers: [TwitterService]
})
export class TwitterSearchAppComponent {
  title = 'twitter-search works!';

  constructor(twitterService:TwitterService) {
    twitterService.getArticles('football').subscribe(
      articles => console.log('articles: ', articles),
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
  }
}
