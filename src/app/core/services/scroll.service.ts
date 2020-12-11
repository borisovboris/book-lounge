import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService  {

  private throttleInterval = 100;
  private scrollPosition = new BehaviorSubject<number>(0);
  public currentScrollPos$ = this.scrollPosition.asObservable();

  constructor(private viewportScroller: ViewportScroller) { 
    this.getCurrentYPos();
  }

  getCurrentYPos(): void {
    fromEvent(window, 'scroll').pipe(throttleTime(this.throttleInterval)).subscribe(
      () => { 
        
        const currentScrollPos = this.viewportScroller.getScrollPosition()[1];
        
        this.scrollPosition.next(currentScrollPos);
        
      }
    );
  }

}


// manageNavbar(navbar: ElementRef) {
//   fromEvent(window, 'scroll').pipe(throttleTime(this.throttleInterval)).subscribe(
//     () => { 
      
//       const currentScrollPos = this.viewportScroller.getScrollPosition()[1];
//       const el = navbar.nativeElement;
  
//       if(currentScrollPos > this.prevScrollPos && currentScrollPos > 20) {
//         el.style.top = "-80px";
//       } else {
//         el.style.top = "0px";
//       }
      
//       this.prevScrollPos = currentScrollPos;
//     }
//   );
// }