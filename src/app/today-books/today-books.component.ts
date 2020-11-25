import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../core/models/book';
import { BookService } from '../core/services/book.service';

@Component({
  selector: 'app-today-books',
  templateUrl: './today-books.component.html',
  styleUrls: ['./today-books.component.css']
})
export class TodayBooksComponent implements OnInit {

  $books: Observable<Array<IBook>>

  constructor(private bookService: BookService) { 
    this.$books = this.bookService.getTodayBooks();
  }

  ngOnInit(): void {
  }

}
