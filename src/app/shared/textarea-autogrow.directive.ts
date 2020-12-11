import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appTextareaAutogrow]'
})
export class TextareaAutogrowDirective implements AfterViewInit, OnDestroy {

  private textareaSubscription: Subscription;
  @Input('appTextareaAutogrow') throttleInterval: number;
  private fontSize: any;
  
  constructor(private textarea: ElementRef, private renderer2: Renderer2) { 
    this.fontSize = this.textarea.nativeElement.fontSize;
  }

  autogrow(): void {
    const textarea = this.textarea.nativeElement;     
    this.renderer2.setStyle(textarea, 'overflow', 'hidden');
    this.renderer2.setStyle(textarea, 'height', '0px');
    this.renderer2.setStyle(textarea, 'height', `${+textarea.scrollHeight + 22.4}px`);
  }

  ngAfterViewInit() {
    this.textareaSubscription = fromEvent(this.textarea.nativeElement, 'keydown').pipe(throttleTime(this.throttleInterval)).subscribe(
      () => { this.autogrow();  }
    )
  }

  ngOnDestroy() {
    this.textareaSubscription.unsubscribe();
  }
  
}
