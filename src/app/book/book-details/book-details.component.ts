import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/core/models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  book: IBook;
  bookImage: string;

  ngOnInit(): void {
    this.route.data
    .subscribe((data: {book: IBook}) => 
      { this.book = data.book; this.bookImage = `assets/images/books/${this.book.coverImage}` }
    );


  }

}
