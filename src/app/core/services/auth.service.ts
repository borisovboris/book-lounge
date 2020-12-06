import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  private componentCallSource = new Subject<string>();
  loginComponentCalled$ = this.componentCallSource.asObservable();

  constructor(private router: Router) {

  }

  callLoginComponent(operation: string): void {
    this.componentCallSource.next(operation);
  }

  login(): Observable<boolean> {
    console.log(this.isLoggedIn);
    this.isLoggedIn = true;

    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }

}
