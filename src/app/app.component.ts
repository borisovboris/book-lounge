import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { ScrollService } from './core/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('logintemp', { read: ViewContainerRef })
  private loginViewContainerRef: ViewContainerRef; 

  title = 'book-lounge';

  @ViewChild(NavComponent, {read: ElementRef}) navbar: ElementRef;


  constructor(
    private scrollService: ScrollService,
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver
   ) { }

  ngAfterViewInit() {
    this.scrollService.manageNavbar(this.navbar);
  }

  async loadLoginComponent() {
    this.vcref.clear();
    const { LoginComponent } = await import ('./auth/login/login.component');
    this.loginViewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(LoginComponent)
    );
  }
  
}
