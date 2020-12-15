import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  isOpen: boolean = true;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('login destroyed');
  }

  login() {
    this.authService.login();
    this.isOpen = false;
  }

}
