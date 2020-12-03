import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private componentCallSource = new Subject<any>();

  loginComponentCalled$ = this.componentCallSource.asObservable();

  callLoginComponent(): void {
    this.componentCallSource.next();
  }


}
