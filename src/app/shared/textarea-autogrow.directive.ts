import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextareaAutogrow]'
})
export class TextareaAutogrowDirective {

  constructor(el: ElementRef, private renderer2: Renderer2) { }

}
