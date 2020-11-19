import { ViewportScroller } from '@angular/common';
import { ElementRef, Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService  {

  private prevScrollPos: number = 0;
  private debounceInterval = 175;

  constructor(private viewportScroller: ViewportScroller) { 

  }

  manageNavbar(navbar: ElementRef) {
    fromEvent(window, 'scroll').pipe(throttleTime(this.debounceInterval)).subscribe(
      () => { 
        console.log('scroll');
        const currentScrollPos = this.viewportScroller.getScrollPosition()[1];
        const el = navbar.nativeElement;
    
        if(currentScrollPos > this.prevScrollPos && currentScrollPos > 100) {
          el.style.top = "-80px";
        } else {
          el.style.top = "0px";
        }
        
        this.prevScrollPos = currentScrollPos;
      }
    );
  }

}
