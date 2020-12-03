import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    public authService: AuthService
  ) { 
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('login destroyed');
  }

}
