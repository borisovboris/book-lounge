import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;

  private componentCallSource = new Subject<string>();
  loginComponentCalled$ = this.componentCallSource.asObservable();

  constructor(private router: Router) {
    
  }

  callLoginComponent(operation: string): void {
    this.componentCallSource.next(operation);
  }

  login(): void {

    of(true).pipe(delay(1000), take(1)).subscribe(val => {
      this.isLoggedIn = val;
      this.callLoginComponent('close');
      this.redirect();
    });
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }

  redirect(): void {
    this.router.navigateByUrl(this.redirectUrl || '');
  }

}
