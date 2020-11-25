import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/core/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: IBook;
  bookImageUrl: string;

  constructor() { }

  ngOnInit(): void {

    this.bookImageUrl = 'assets/images/books/' + this.book.coverImage;
  }

}
