import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({
  declarations: [BookComponent, BookListComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
