import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [BookListComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule
  ]
})
export class BookModule { }

