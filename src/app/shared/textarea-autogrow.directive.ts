import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appTextareaAutogrow]'
})
export class TextareaAutogrowDirective implements AfterViewInit, OnDestroy {

  private textareaSubscriptions: Subscription[] = [];
  @Input('appTextareaAutogrow') throttleInterval: number | 200;
  private debounceInterval: number = 250;
  private fontSize: number = 0;
  
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

    this.textareaSubscriptions.push(
      fromEvent(this.textarea.nativeElement, 'keydown').pipe(throttleTime(this.throttleInterval)).subscribe(
        () => { this.autogrow(); }
      )
    );

    this.textareaSubscriptions.push(
      fromEvent(window, 'resize').pipe(debounceTime(this.debounceInterval)).subscribe(
        () => { this.autogrow(); }
      )
    );

  }

  ngOnDestroy() {
    this.textareaSubscriptions.forEach(subscription => subscription.unsubscribe());
  }
  
}
