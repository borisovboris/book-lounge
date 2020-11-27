import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { IBook } from '../core/models/book';
import { BookService } from '../core/services/book.service';

@Injectable(
  { providedIn: 'root' }
)

export class BookDetailsResolverService implements Resolve<Observable<IBook>> {
  
  constructor(private bookService: BookService) { }
  $book: Observable<IBook>;

  resolve(route: ActivatedRouteSnapshot): Observable<IBook> {
    const bookId = +route.params['id'];

    return this.bookService.getBook(bookId).pipe(take(1));
    
  }

}
