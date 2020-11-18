import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  private prevScrollPos: number = 0;

  @ViewChild(NavComponent, {read: ElementRef}) navbar: ElementRef;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    const currentScrollPos = window.pageYOffset;
    const el = this.navbar.nativeElement;

    if(currentScrollPos > this.prevScrollPos) {
      el.style.top = "-80px";
      console.log('down');
    } else {
      el.style.top = "0px";
      console.log('up');
    }
    
    this.prevScrollPos = currentScrollPos;
  } 

  ngAfterViewInit() {
    // console.log(this.navbar.nativeElement.style.display = "none");
    // console.log(this.navbar.nativeElement);
  }
  
}
