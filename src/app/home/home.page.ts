import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';


@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private userService: UserService) {}
  public async ngOnInit() {
    // Simulates login
    this.userService.setupUser();
  }
}
