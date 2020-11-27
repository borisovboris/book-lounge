import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IBook } from '../models/book';
import { books } from '../mock-data/books';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books$: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>(books);

  constructor() { }

  getTodayBooks(): Observable<Array<IBook>> {
    //sorting is necessary - get the books that were added more recently with the best ratings

    return this.books$;
  }

  getAllBooks(): Observable<Array<IBook>> {
    //get all books, no sorting, just randomized
    
    return this.books$;
  }

  getBook(id: number | string) {
    return this.getAllBooks().pipe(
      map(books => books.find(book => book.id === +id))
    );
  }

}
