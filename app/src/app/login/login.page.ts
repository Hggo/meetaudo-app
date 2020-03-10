import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  constructor(private router: Router) {}

  public login() {
    this.router.navigate(['/home']);
  }
}
