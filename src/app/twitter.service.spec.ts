import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TwitterService } from './twitter.service';

describe('Twitter Service', () => {
  beforeEachProviders(() => [TwitterService]);

  it('should ...',
      inject([TwitterService], (service: TwitterService) => {
    expect(service).toBeTruthy();
  }));
});
