import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appTextareaAutogrow]'
})
export class TextareaAutogrowDirective implements AfterViewInit, OnDestroy {

  private textareaSubscription: Subscription;
  @Input('appTextareaAutogrow') throttleInterval: number | 200;
  private fontSize: number;
  
  constructor(private textarea: ElementRef, private renderer2: Renderer2) { 
  }

  autogrow(): void {
    const textarea = this.textarea.nativeElement;   
    this.renderer2.setStyle(textarea, 'overflow', 'hidden');
    this.renderer2.setStyle(textarea, 'height', '0px');
    this.renderer2.setStyle(textarea, 'height', `${+textarea.scrollHeight + this.fontSize}px`);
  }

  ngAfterViewInit() {
    this.fontSize = parseFloat(
      window.getComputedStyle(this.textarea.nativeElement, null).getPropertyValue('font-size')
    );

    this.textareaSubscription = fromEvent(this.textarea.nativeElement, 'keydown').pipe(throttleTime(this.throttleInterval)).subscribe(
      () => { this.autogrow();  }
    )
  }

  ngOnDestroy() {
    this.textareaSubscription.unsubscribe();
  }
  
}
