import { Component } from '@angular/core';
import {TwitterService, Article} from './twitter.service';

@Component({
  moduleId: module.id,
  selector: 'twitter-search-app',
  templateUrl: 'twitter-search.component.html',
  styleUrls: ['twitter-search.component.css'],
  providers: [TwitterService]
})
export class TwitterSearchAppComponent {
  title = 'twitter-search works!';

  articles: Array<Article>;

  searchTerm: string;

  constructor(private twitterService:TwitterService) {
  }

  private searchArticle(){
      this.twitterService.getArticles(this.searchTerm).subscribe(
        articles => {
          console.log('articles: ', articles);
          this.articles = articles;
        },
        error => console.error('Error: ' + error),
              () => console.log('Completed!')
          );
      }

  filter() {
    if (this.searchTerm.length > 1) {
      this.searchArticle();
    }
  }
}
