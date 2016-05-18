import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TwitterSearchAppComponent } from '../app/twitter-search.component';

beforeEachProviders(() => [TwitterSearchAppComponent]);

describe('App: TwitterSearch', () => {
  it('should create the app',
      inject([TwitterSearchAppComponent], (app: TwitterSearchAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'twitter-search works!\'',
      inject([TwitterSearchAppComponent], (app: TwitterSearchAppComponent) => {
    expect(app.title).toEqual('twitter-search works!');
  }));
});
