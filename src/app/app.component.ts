import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { ScrollService } from './core/services/scroll.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('logintemp', { read: ViewContainerRef }) private loginViewContainerRef: ViewContainerRef; 
  @ViewChild(NavComponent, {read: ElementRef}) navbar: ElementRef;
  @ViewChild('globalWrapper') globalWrapper: ElementRef;
  @ViewChild('container') container: ElementRef;

  private currentYPos: number = 0;
  private previousYPos: number = 0;
  title = 'book-lounge';
  


  constructor(
    private scrollService: ScrollService,
    private cfr: ComponentFactoryResolver,
    private authService: AuthService
   ) { }

   ngOnInit() {
    this.authService.loginComponentCalled$.subscribe((operation) => {
      if(operation === 'open') {
       this.loadLoginComponent();
      } else if(operation === 'close') {
        this.removeLoginComponent();
      }
     
    });
   }

  ngAfterViewInit() {
    this.scrollService.currentScrollPos$.subscribe((data) => {
      if(data !== 0) {
        this.currentYPos = data;
      }

      this.manageNavbar();
    });
  }

  async loadLoginComponent() {
      const wrapper = this.globalWrapper.nativeElement;
      wrapper.setAttribute('style', 
      `position:fixed; 
      overflow: hidden; 
      top: ${-this.currentYPos}px;
      `);

      this.loginViewContainerRef.clear();
      
      const { LoginComponent } = await import ('./auth/login/login.component');
      this.loginViewContainerRef.createComponent(
        this.cfr.resolveComponentFactory(LoginComponent)
      );
  }

 removeLoginComponent() {
    this.loginViewContainerRef.clear();

    const wrapper = this.globalWrapper.nativeElement;
    wrapper.setAttribute('style', 'position:static; overflow: auto;');

    window.scroll(0, this.currentYPos);
  }

  manageNavbar() {
    const navbarEl = this.navbar.nativeElement;

    if(this.currentYPos > this.previousYPos && this.currentYPos > 20) {
      navbarEl.style.top = "-80px";
    } else {
      navbarEl.style.top = "0px";
    }
    
    this.previousYPos = this.currentYPos;
  }
  
}
