import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/core/models/book';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  heading: string = "All Books"
  $books: Observable<Array<IBook>>;

  constructor(private bookService: BookService) { 
    this.$books = bookService.getAllBooks();
    
  }

  ngOnInit(): void {
  }

}
