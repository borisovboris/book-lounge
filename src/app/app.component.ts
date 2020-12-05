import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { ScrollService } from './core/services/scroll.service';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('logintemp', { read: ViewContainerRef }) private loginViewContainerRef: ViewContainerRef; 

  title = 'book-lounge';

  @ViewChild(NavComponent, {read: ElementRef}) navbar: ElementRef;
  @ViewChild('globalWrapper') globalWrapper: ElementRef;
  


  constructor(
    private scrollService: ScrollService,
    private cfr: ComponentFactoryResolver,
    private authService: AuthService
   ) { 
   }

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
    this.scrollService.manageNavbar(this.navbar);
  }

  async loadLoginComponent() {
      const wrapper = this.globalWrapper.nativeElement;
      wrapper.setAttribute('style','position:fixed');
      

      this.loginViewContainerRef.clear();
      
      const { LoginComponent } = await import ('./auth/login/login.component');
      this.loginViewContainerRef.createComponent(
        this.cfr.resolveComponentFactory(LoginComponent)
      );
  }

 removeLoginComponent() {
    this.loginViewContainerRef.clear();
    const wrapper = this.globalWrapper.nativeElement;
    wrapper.style.overflow = "";
    wrapper.style.position = "static";
  }
  
}
