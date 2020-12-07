import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [BookListComponent, BookDetailsComponent, ReviewsListComponent, ReviewComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule
  ]
})
export class BookModule { }

