import { ViewportScroller } from '@angular/common';
import { ElementRef, Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService  {

  private prevScrollPos: number = 0;
  private throttleInterval = 100;

  constructor(private viewportScroller: ViewportScroller) { 

  }

  manageNavbar(navbar: ElementRef) {
    fromEvent(window, 'scroll').pipe(throttleTime(this.throttleInterval)).subscribe(
      () => { 
        
        const currentScrollPos = this.viewportScroller.getScrollPosition()[1];
        const el = navbar.nativeElement;
    
        if(currentScrollPos > this.prevScrollPos && currentScrollPos > 20) {
          el.style.top = "-80px";
        } else {
          el.style.top = "0px";
        }
        
        this.prevScrollPos = currentScrollPos;
      }
    );
  }

}
