import { ViewportScroller } from '@angular/common';
import { ElementRef, Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService  {

  private prevScrollPos: number = 0;
  private debounceInterval = 18;

  constructor(private viewportScroller: ViewportScroller) { 

  }

  manageNavbar(navbar: ElementRef) {
    fromEvent(window, 'scroll').pipe(debounceTime(this.debounceInterval)).subscribe(
      () => { 
        console.log('scroll');
        const currentScrollPos = this.viewportScroller.getScrollPosition()[1];
        const el = navbar.nativeElement;
    
        if(currentScrollPos > this.prevScrollPos) {
          el.style.top = "-80px";
        } else {
          el.style.top = "0px";
        }
        
        this.prevScrollPos = currentScrollPos;
      }
    );
  }

}
