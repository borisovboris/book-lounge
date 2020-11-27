import { TestBed } from '@angular/core/testing';

import { BookDetailsResolverService } from './book-details-resolver.service';

describe('BookDetailsResolverService', () => {
  let service: BookDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
