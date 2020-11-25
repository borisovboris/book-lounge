import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { ScrollService } from './core/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  // private prevScrollPos: number = 0;
  title = 'book-lounge';

  @ViewChild(NavComponent, {read: ElementRef}) navbar: ElementRef;

  // @HostListener('window:scroll', ['$event']) onScrollEvent($event){
  //   const currentScrollPos = window.pageYOffset;
  //   const el = this.navbar.nativeElement;

  //   if(currentScrollPos > this.prevScrollPos) {
  //     el.style.top = "-80px";
  //   } else {
  //     el.style.top = "0px";
  //   }
    
  //   this.prevScrollPos = currentScrollPos;
  // } 

  constructor(private scrollService: ScrollService) { }

  ngAfterViewInit() {
    this.scrollService.manageNavbar(this.navbar);
  }
  
}
