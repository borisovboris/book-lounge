import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from '../models/book';
import { books } from '../mock-data/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getTodayBooks(): Observable<Array<IBook>>{
    //sorting is necessary - get the books that were added more recently with the best ratings

    return of(books);
  }
}
