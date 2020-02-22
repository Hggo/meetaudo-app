import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  constructor(private dashboardService: DashboardService) {}
  public async ngOnInit() {
    const data = await this.dashboardService.getdata();
    console.log(data);
  }
}
