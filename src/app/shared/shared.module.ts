import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { TextareaAutogrowDirective } from './textarea-autogrow.directive';



@NgModule({
  declarations: [BookComponent, TextareaAutogrowDirective],
  imports: [
    CommonModule
  ],
  exports: [BookComponent, TextareaAutogrowDirective]
})
export class SharedModule { }
