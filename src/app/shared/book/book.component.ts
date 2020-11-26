import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/core/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: IBook;
  bookImageUrl: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.bookImageUrl = 'assets/images/books/' + this.book.coverImage;
  }

  showBook(id: number) {
    // this.router.navigate(['books', '/book-details/', {id: bookId}]);
    this.router.navigate(['books/book-details', id]);
  }

}
