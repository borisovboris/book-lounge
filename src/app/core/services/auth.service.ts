import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private componentCallSource = new Subject<string>();

  loginComponentCalled$ = this.componentCallSource.asObservable();

  callLoginComponent(operation: string): void {
    this.componentCallSource.next(operation);
  }


}
