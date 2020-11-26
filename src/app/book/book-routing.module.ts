import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';

const bookRoutes: Routes = [
  { path: '', children: [
    { path: 'book-details/:id', component: BookDetailsComponent},
    { path: '', component: BookListComponent, pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
