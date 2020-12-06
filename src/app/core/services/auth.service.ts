import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  private componentCallSource = new Subject<string>();
  loginComponentCalled$ = this.componentCallSource.asObservable();

  callLoginComponent(operation: string): void {
    this.componentCallSource.next(operation);
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000), 
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
