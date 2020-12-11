import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFillIcon]'
})
export class FillIconDirective {

  constructor(private el: ElementRef, private renderer2: Renderer2 ) { }

  @HostListener('mouseover') 
  onMouseOver() {
    this.renderer2.removeClass(this.el.nativeElement, 'far');
    this.renderer2.addClass(this.el.nativeElement, 'fas');
    // this.el.nativeElement.classList.remove('far');
    // this.el.nativeElement.classList.add('fas');
    
  }

  @HostListener('mouseout') 
  onMouseOut() {
    this.renderer2.removeClass(this.el.nativeElement, 'fas');
    this.renderer2.addClass(this.el.nativeElement, 'far');
    // this.el.nativeElement.classList.remove('fas');
    // this.el.nativeElement.classList.add('far');
  }

}
